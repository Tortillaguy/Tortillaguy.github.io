#!/usr/bin/env node

/**
 * Markdown to DOCX/PDF Resume Converter
 * Converts markdown-formatted resumes to professionally formatted Word documents or PDFs
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  TabStopType,
  TabStopPosition,
  type IStylesOptions,
  convertInchesToTwip,
} from "docx";
import {
  PDFDocument,
  rgb,
  StandardFonts,
  type PDFFont,
  type PDFPage,
} from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactInfo {
  name?: string;
  title?: string;
  location?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  portfolio?: string;
  github?: string;
}

interface Experience {
  company: string;
  location: string;
  title: string;
  dates: string;
  bullets: string[];
}

interface Education {
  school: string;
  date: string;
  degree: string;
}

interface ResumeData {
  header: ContactInfo;
  summary: string;
  skills: Record<string, string>;
  experience: Experience[];
  education: Education[];
}

/**
 * Parse markdown resume into structured data
 */
class MarkdownResumeParser {
  private lines: string[];
  private data: ResumeData;

  constructor(markdownText: string) {
    this.lines = markdownText.trim().split("\n");
    this.data = {
      header: {},
      summary: "",
      skills: {},
      experience: [],
      education: [],
    };
    this.parse();
  }

  private parse(): void {
    let i = 0;
    let currentSection: string | null = null;
    let currentJob: Experience | null = null;

    while (i < this.lines.length) {
      const line = this.lines[i].trim();

      // Skip empty lines
      if (!line) {
        i++;
        continue;
      }

      // Parse name (# Name)
      if (line.startsWith("# ") && !this.data.header.name) {
        this.data.header.name = line.substring(2).trim();
        i++;
        continue;
      }

      // Parse title (## Title after name)
      if (
        line.startsWith("## ") &&
        this.data.header.name &&
        !this.data.header.title
      ) {
        this.data.header.title = line.substring(3).trim();
        i++;
        continue;
      }

      // Parse contact info (lines with | separators)
      if (line.includes("|") && !line.startsWith("**") && !currentSection) {
        const parts = line.split("|").map((p) => p.trim());
        if (parts.length >= 3 && !this.data.header.location) {
          this.data.header.location = parts[0];
          this.data.header.phone = parts[1];
          this.data.header.email = parts[2];
        }
        i++;
        continue;
      }

      // Parse LinkedIn, Portfolio, GitHub lines
      if (line.startsWith("LinkedIn")) {
        this.data.header.linkedin = line.includes("-")
          ? line.split("-", 2)[1].trim()
          : line;
        i++;
        continue;
      }
      if (line.startsWith("Portfolio")) {
        this.data.header.portfolio = line.includes("-")
          ? line.split("-", 2)[1].trim()
          : line;
        i++;
        continue;
      }
      if (line.startsWith("Github") || line.startsWith("GitHub")) {
        this.data.header.github = line.includes("-")
          ? line.split("-", 2)[1].trim()
          : line;
        i++;
        continue;
      }

      // Parse section headers (## Section)
      if (line.startsWith("## ")) {
        const sectionName = line.substring(3).trim().toLowerCase();
        if (sectionName.includes("summary")) {
          currentSection = "summary";
        } else if (sectionName.includes("skill")) {
          currentSection = "skills";
        } else if (
          sectionName.includes("experience") ||
          sectionName.includes("professional")
        ) {
          currentSection = "experience";
        } else if (sectionName.includes("education")) {
          currentSection = "education";
        } else {
          currentSection = null;
        }
        currentJob = null;
        i++;
        continue;
      }

      // Parse content based on current section
      if (currentSection === "summary") {
        if (!line.startsWith("#")) {
          this.data.summary += line + " ";
        }
        i++;
        continue;
      }

      if (currentSection === "skills") {
        // Parse skill categories (bold text followed by colon)
        if (line.includes("**") && line.includes(":")) {
          const match = line.match(/\*\*([^*]+)\*\*:?\s*(.+)/);
          if (match) {
            const category = match[1].trim().replace(":", "");
            const skills = match[2].trim();
            this.data.skills[category] = skills;
          }
        }
        i++;
        continue;
      }

      if (currentSection === "experience") {
        // Parse job header (### Company | Location)
        if (line.startsWith("### ")) {
          const companyLine = line.substring(4).trim();
          let company: string, location: string;

          if (companyLine.includes("|")) {
            const parts = companyLine.split("|");
            company = parts[0].trim();
            location = parts[1]?.trim() || "Remote";
          } else {
            company = companyLine;
            location = "Remote";
          }

          currentJob = {
            company,
            location,
            title: "",
            dates: "",
            bullets: [],
          };
          this.data.experience.push(currentJob);
          i++;
          continue;
        }

        // Parse job title and dates (**Title** | Dates)
        if (line.startsWith("**") && currentJob) {
          const match = line.match(/\*\*([^*]+)\*\*\s*\|\s*(.+)/);
          if (match) {
            currentJob.title = match[1].trim();
            currentJob.dates = match[2].trim();
          }
          i++;
          continue;
        }

        // Parse bullet points
        if (line.startsWith("-") && currentJob) {
          const bullet = line.substring(1).trim();
          currentJob.bullets.push(bullet);
          i++;
          continue;
        }
      }

      if (currentSection === "education") {
        // Parse education entries
        if (line.startsWith("**")) {
          const match = line.match(/\*\*([^*]+)\*\*\s*\|\s*(.+)/);
          if (match) {
            const school = match[1].trim();
            const date = match[2].trim();

            // Look ahead for degree on next line
            let degree = "";
            if (i + 1 < this.lines.length) {
              const nextLine = this.lines[i + 1].trim();
              if (
                nextLine &&
                !nextLine.startsWith("**") &&
                !nextLine.startsWith("#")
              ) {
                degree = nextLine;
                i++; // Skip the degree line
              }
            }

            this.data.education.push({
              school,
              date,
              degree,
            });
          }
          i++;
          continue;
        }
      }

      i++;
    }

    // Clean up summary
    this.data.summary = this.data.summary.trim();
  }

  public getData(): ResumeData {
    return this.data;
  }
}

/**
 * Generate formatted DOCX resume from parsed data
 */
class ResumeDocxGenerator {
  private filename: string;

  constructor(outputFilename: string = "resume_from_markdown.docx") {
    this.filename = outputFilename;
  }

  private createStyles(): IStylesOptions {
    return {
      default: {
        document: {
          run: {
            font: "Calibri",
            size: 20, // 10pt in half-points
          },
        },
      },
      paragraphStyles: [
        {
          id: "ResumeName",
          name: "Resume Name",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 36, // 18pt
            bold: true,
          },
          paragraph: {
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
          },
        },
        {
          id: "ResumeTitle",
          name: "Resume Title",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 24, // 12pt
          },
          paragraph: {
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
          },
        },
        {
          id: "ResumeContact",
          name: "Resume Contact",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 20, // 10pt
          },
          paragraph: {
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
          },
        },
        {
          id: "SectionHeader",
          name: "Section Header",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 22, // 11pt
            bold: true,
          },
          paragraph: {
            spacing: { before: 120, after: 60 },
          },
        },
        {
          id: "CompanyName",
          name: "Company Name",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 22, // 11pt
            bold: true,
          },
          paragraph: {
            spacing: { before: 60, after: 20 },
          },
        },
        {
          id: "JobTitle",
          name: "Job Title",
          basedOn: "Normal",
          run: {
            font: "Calibri",
            size: 20, // 10pt
            italics: true,
          },
          paragraph: {
            spacing: { after: 40 },
          },
        },
      ],
    };
  }

  private addHeader(header: ContactInfo): Paragraph[] {
    const paragraphs: Paragraph[] = [];

    // Name
    if (header.name) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeName",
          children: [new TextRun(header.name)],
        })
      );
    }

    // Title
    if (header.title) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeTitle",
          children: [new TextRun(header.title)],
        })
      );
    }

    // Contact info
    const contactParts: string[] = [];
    if (header.location) contactParts.push(header.location);
    if (header.phone) contactParts.push(header.phone);
    if (header.email) contactParts.push(header.email);

    if (contactParts.length > 0) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeContact",
          children: [new TextRun(contactParts.join(" | "))],
        })
      );
    }

    // Links
    if (header.linkedin) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeContact",
          children: [new TextRun(`LinkedIn - ${header.linkedin}`)],
        })
      );
    }
    if (header.portfolio) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeContact",
          children: [new TextRun(`Portfolio - ${header.portfolio}`)],
        })
      );
    }
    if (header.github) {
      paragraphs.push(
        new Paragraph({
          style: "ResumeContact",
          children: [new TextRun(`Github - ${header.github}`)],
        })
      );
    }

    return paragraphs;
  }

  private addSummary(summaryText: string): Paragraph[] {
    if (!summaryText) return [];

    return [
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun("Summary")],
      }),
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: summaryText, size: 20 })],
      }),
    ];
  }

  private addSkills(skillsData: Record<string, string>): Paragraph[] {
    const paragraphs: Paragraph[] = [];

    if (Object.keys(skillsData).length > 0) {
      paragraphs.push(
        new Paragraph({
          style: "SectionHeader",
          children: [new TextRun("Technical Skills")],
        })
      );

      for (const [category, skills] of Object.entries(skillsData)) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: `${category}: `, bold: true, size: 20 }),
              new TextRun({ text: skills, size: 20 }),
            ],
          })
        );
      }
    }

    return paragraphs;
  }

  private addExperience(experienceData: Experience[]): Paragraph[] {
    const paragraphs: Paragraph[] = [];

    if (experienceData.length > 0) {
      paragraphs.push(
        new Paragraph({
          style: "SectionHeader",
          children: [new TextRun("Professional Experience")],
        })
      );

      for (const job of experienceData) {
        // Company and location with tab stop
        paragraphs.push(
          new Paragraph({
            style: "CompanyName",
            tabStops: [
              {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX - 720,
              },
            ],
            children: [
              new TextRun(job.company),
              new TextRun("\t" + job.location),
            ],
          })
        );

        // Title and dates with tab stop
        paragraphs.push(
          new Paragraph({
            style: "JobTitle",
            tabStops: [
              {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX - 720,
              },
            ],
            children: [new TextRun(job.title), new TextRun("\t" + job.dates)],
          })
        );

        // Bullet points
        for (const bullet of job.bullets) {
          paragraphs.push(
            new Paragraph({
              indent: { left: convertInchesToTwip(0.125) },
              spacing: { after: 40 },
              children: [new TextRun({ text: `• ${bullet}`, size: 18 })],
            })
          );
        }
      }
    }

    return paragraphs;
  }

  private addEducation(educationData: Education[]): Paragraph[] {
    const paragraphs: Paragraph[] = [];

    if (educationData.length > 0) {
      paragraphs.push(
        new Paragraph({
          style: "SectionHeader",
          children: [new TextRun("EDUCATION")],
        })
      );

      for (const edu of educationData) {
        // School and date with tab stop
        paragraphs.push(
          new Paragraph({
            style: "CompanyName",
            tabStops: [
              {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX - 720,
              },
            ],
            children: [new TextRun(edu.school), new TextRun("\t" + edu.date)],
          })
        );

        // Degree (handle multi-line degrees)
        if (edu.degree) {
          const degrees = edu.degree.split("\n");
          for (const degree of degrees) {
            if (degree.trim()) {
              paragraphs.push(
                new Paragraph({
                  spacing: { after: 20 },
                  children: [new TextRun({ text: degree.trim(), size: 20 })],
                })
              );
            }
          }
        }
      }
    }

    return paragraphs;
  }

  public async generateFromData(data: ResumeData): Promise<void> {
    // Collect all content paragraphs
    const children: Paragraph[] = [
      ...this.addHeader(data.header),
      ...this.addSummary(data.summary),
      ...this.addSkills(data.skills),
      ...this.addExperience(data.experience),
      ...this.addEducation(data.education),
    ];

    // Create document with styles and content
    const doc = new Document({
      styles: this.createStyles(),
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: convertInchesToTwip(0.6),
                right: convertInchesToTwip(0.6),
                bottom: convertInchesToTwip(0.6),
                left: convertInchesToTwip(0.6),
              },
            },
          },
          children,
        },
      ],
    });

    // Generate and save the document
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(this.filename, buffer);
  }
}

/**
 * PDF Resume Generator
 * Generates professional PDF resumes from parsed markdown data
 */
class ResumePdfGenerator {
  private filename: string;
  private pdfDoc: PDFDocument | undefined;
  private page: PDFPage | undefined;
  private boldFont: PDFFont | undefined;
  private regularFont: PDFFont | undefined;
  private italicFont: PDFFont | undefined;
  private yPosition: number = 0;
  private pageHeight: number = 0;
  private margin: number = 36; // ~0.5 inches
  private contentWidth: number = 0;
  private lineHeight: number = 12;

  constructor(filename: string) {
    this.filename = filename;
  }

  private async initializeDocument() {
    this.pdfDoc = await PDFDocument.create();
    this.boldFont = await this.pdfDoc.embedFont(StandardFonts.HelveticaBold);
    this.regularFont = await this.pdfDoc.embedFont(StandardFonts.Helvetica);
    this.italicFont = await this.pdfDoc.embedFont(
      StandardFonts.HelveticaOblique
    );
    this.addPage();
  }

  private addPage() {
    if (!this.pdfDoc) return;
    this.page = this.pdfDoc.addPage([612, 792]); // Letter size: 8.5" x 11"
    const { width, height } = this.page.getSize();
    this.pageHeight = height;
    this.yPosition = height - this.margin;
    this.contentWidth = width - this.margin * 2;
  }

  private checkNewPage(requiredHeight: number) {
    if (this.yPosition - requiredHeight < this.margin) {
      this.addPage();
    }
  }

  // Helper function to draw text
  private drawText(
    text: string,
    x: number,
    size: number,
    font: PDFFont,
    color = rgb(0, 0, 0)
  ) {
    if (!this.page) return;
    this.page.drawText(text, {
      x,
      y: this.yPosition,
      size,
      font,
      color,
    });
  }

  // Helper function to draw section headers with a horizontal rule
  private drawSectionHeader(title: string) {
    if (!this.page || !this.boldFont) return;
    this.yPosition -= 5; // Add space above the header
    this.checkNewPage(this.lineHeight + 18);
    this.drawText(title, this.margin, 11, this.boldFont);
    this.yPosition -= 5; // Space before line

    // Draw horizontal line
    this.page.drawLine({
      start: { x: this.margin, y: this.yPosition },
      end: { x: this.contentWidth + this.margin, y: this.yPosition },
      thickness: 1,
      color: rgb(0.1, 0.1, 0.1), // Dark gray line
    });

    this.yPosition -= 15; // Space after line
  }

  // Helper function to wrap text
  private wrapText(
    text: string,
    maxWidth: number,
    font: PDFFont,
    fontSize: number
  ): string[] {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const textWidth = font.widthOfTextAtSize(testLine, fontSize);

      if (textWidth > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  }

  public async generateFromData(data: ResumeData): Promise<void> {
    await this.initializeDocument();

    if (
      !this.pdfDoc ||
      !this.page ||
      !this.boldFont ||
      !this.regularFont ||
      !this.italicFont
    ) {
      throw new Error("PDF Document not initialized correctly.");
    }

    // Add header (name, title, contact info)
    if (data.header.name) {
      const nameWidth = this.boldFont.widthOfTextAtSize(data.header.name, 17);
      this.drawText(
        data.header.name,
        this.margin + (this.contentWidth - nameWidth) / 2,
        17,
        this.boldFont
      );
      this.yPosition -= 18;
    }

    if (data.header.title) {
      const titleWidth = this.regularFont.widthOfTextAtSize(
        data.header.title,
        10
      );
      this.drawText(
        data.header.title,
        this.margin + (this.contentWidth - titleWidth) / 2,
        10,
        this.regularFont
      );
      this.yPosition -= 14;
    }

    // Contact info on one line
    const contactParts: string[] = [];
    if (data.header.location) contactParts.push(data.header.location);
    if (data.header.phone) contactParts.push(data.header.phone);
    if (data.header.email) contactParts.push(data.header.email);

    if (contactParts.length > 0) {
      const contactText = contactParts.join(" | ");
      const contactWidth = this.regularFont.widthOfTextAtSize(contactText, 9);
      this.drawText(
        contactText,
        this.margin + (this.contentWidth - contactWidth) / 2,
        9,
        this.regularFont
      );
      this.yPosition -= 12;
    }

    // Links (on separate lines, black)
    const linkLines: string[] = [];
    if (data.header.linkedin)
      linkLines.push(`LinkedIn - ${data.header.linkedin}`);
    if (data.header.portfolio)
      linkLines.push(`Portfolio - ${data.header.portfolio}`);
    if (data.header.github) linkLines.push(`Github - ${data.header.github}`);

    for (const line of linkLines) {
      this.checkNewPage(this.lineHeight);
      const linkWidth = this.regularFont.widthOfTextAtSize(line, 9);
      this.drawText(
        line,
        this.margin + (this.contentWidth - linkWidth) / 2,
        9,
        this.regularFont,
        rgb(0, 0, 0) // Black text
      );
      this.yPosition -= 12; // Line height for 9pt font
    }
    this.yPosition -= 4; // Extra spacing after links

    // Summary
    if (data.summary) {
      this.drawSectionHeader("Summary");
      this.checkNewPage(this.lineHeight * 2); // Check for space
      const summaryIndent = 18; // ~0.25 inch indent
      const summaryLines = this.wrapText(
        data.summary,
        this.contentWidth,
        this.regularFont,
        9
      );
      for (let i = 0; i < summaryLines.length; i++) {
        this.checkNewPage(this.lineHeight);
        const x = i === 0 ? this.margin + summaryIndent : this.margin;
        this.drawText(summaryLines[i], x, 9, this.regularFont);
        this.yPosition -= 15;
      }
      this.yPosition -= 4;
    }

    // Skills
    if (data.skills && Object.keys(data.skills).length > 0) {
      this.drawSectionHeader("Technical Skills");
      const skillsIndent = 18;

      for (const [category, skills] of Object.entries(data.skills)) {
        this.checkNewPage(this.lineHeight); // Check for new page per category
        const categoryText = `${category}: `;
        const categoryWidth = this.boldFont.widthOfTextAtSize(categoryText, 9);

        // Draw category (bold)
        this.drawText(
          categoryText,
          this.margin + skillsIndent,
          9,
          this.boldFont
        );

        // Calculate remaining width for skills
        const skillsX = this.margin + skillsIndent + categoryWidth;
        const skillsMaxWidth = this.contentWidth - skillsIndent - categoryWidth;
        const skillsLines = this.wrapText(
          skills,
          skillsMaxWidth,
          this.regularFont,
          9
        );

        // Draw skills lines
        for (let i = 0; i < skillsLines.length; i++) {
          if (i > 0) this.checkNewPage(this.lineHeight); // Check for subsequent lines
          const xPos = i === 0 ? skillsX : skillsX; // First line next to title, others indented
          this.drawText(skillsLines[i], xPos, 9, this.regularFont);
          if (i < skillsLines.length - 1 || skillsLines.length === 1) {
            this.yPosition -= this.lineHeight - 2;
          }
        }
        this.yPosition -= 2; // Gutter between categories
      }
      this.yPosition -= 4;
    }

    // Experience
    if (data.experience && data.experience.length > 0) {
      this.drawSectionHeader("Professional Experience");

      for (const exp of data.experience) {
        // Check for space for company and title (keep them together)
        const headerHeight = this.lineHeight * 2 + 12 + 14;
        this.checkNewPage(headerHeight);

        // Company name and location
        this.drawText(exp.company, this.margin, 10, this.boldFont);
        const locationWidth = this.regularFont.widthOfTextAtSize(
          exp.location,
          9
        );
        this.drawText(
          exp.location,
          this.contentWidth + this.margin - locationWidth,
          9, // Location font size
          this.regularFont
        );
        this.yPosition -= 12;

        // Title and dates
        this.drawText(exp.title, this.margin, 9, this.italicFont); // Italic font
        const dateWidth = this.regularFont.widthOfTextAtSize(exp.dates, 9);
        this.drawText(
          exp.dates,
          this.contentWidth + this.margin - dateWidth,
          9,
          this.regularFont
        );
        this.yPosition -= 14;

        // Bullets
        for (const bullet of exp.bullets) {
          const bulletPoint = "•";
          const bulletIndent = 5; // Indent for the '•'
          const textIndent = 11; // Indent for the text (and wrapped lines)
          const textMaxWidth = this.contentWidth - textIndent;

          const bulletLines = this.wrapText(
            bullet,
            textMaxWidth,
            this.regularFont,
            9
          );

          for (let i = 0; i < bulletLines.length; i++) {
            this.checkNewPage(this.lineHeight); // Check for each line
            if (i === 0) {
              // Draw bullet on first line
              this.drawText(
                bulletPoint,
                this.margin + bulletIndent,
                9,
                this.regularFont
              );
            }
            // Draw text line
            this.drawText(
              bulletLines[i],
              this.margin + textIndent,
              9,
              this.regularFont
            );
            this.yPosition -= this.lineHeight - 2;
          }
          this.yPosition -= 3; // Add space after each bullet point
        }
        this.yPosition -= 4;
      }
    }

    // Education
    if (data.education && data.education.length > 0) {
      this.drawSectionHeader("EDUCATION");

      for (const edu of data.education) {
        this.checkNewPage(this.lineHeight * 2); // Check for entry
        // School and date
        this.drawText(edu.school, this.margin, 10, this.boldFont);
        const dateWidth = this.boldFont.widthOfTextAtSize(edu.date, 10);
        this.drawText(
          edu.date,
          this.contentWidth + this.margin - dateWidth,
          10,
          this.boldFont
        );
        this.yPosition -= 14;

        // Degree(s)
        if (edu.degree) {
          const degrees = edu.degree.split("\n");
          for (const degree of degrees) {
            if (degree.trim()) {
              this.checkNewPage(this.lineHeight);
              this.drawText(degree.trim(), this.margin, 9, this.regularFont);
              this.yPosition -= 12;
            }
          }
        }
        this.yPosition -= 4;
      }
    }

    // Save the PDF
    const pdfBytes = await this.pdfDoc.save();
    fs.writeFileSync(this.filename, pdfBytes);
  }
}

/**
 * Convert markdown resume file to formatted DOCX
 */
async function convertMarkdownToDocx(
  markdownFile: string,
  outputFile?: string
): Promise<string> {
  // Read markdown file
  const markdownPath = path.resolve(markdownFile);
  if (!fs.existsSync(markdownPath)) {
    throw new Error(`Markdown file not found: ${markdownFile}`);
  }

  const markdownContent = fs.readFileSync(markdownPath, "utf-8");

  // Parse markdown
  const parser = new MarkdownResumeParser(markdownContent);
  const data = parser.getData();

  // Generate output filename if not provided
  if (!outputFile) {
    const baseName = path.basename(markdownPath, path.extname(markdownPath));
    outputFile = `${baseName}_formatted.docx`;
  }

  // Generate DOCX
  const generator = new ResumeDocxGenerator(outputFile);
  await generator.generateFromData(data);

  return outputFile;
}

/**
 * Convert markdown resume file to formatted PDF
 */
async function convertMarkdownToPdf(
  markdownFile: string,
  outputFile?: string
): Promise<string> {
  // Read markdown file
  const markdownPath = path.resolve(markdownFile);
  if (!fs.existsSync(markdownPath)) {
    throw new Error(`Markdown file not found: ${markdownFile}`);
  }

  const markdownContent = fs.readFileSync(markdownPath, "utf-8");

  // Parse markdown
  const parser = new MarkdownResumeParser(markdownContent);
  const data = parser.getData();

  // Generate output filename if not provided
  if (!outputFile) {
    const baseName = path.basename(markdownPath, path.extname(markdownPath));
    outputFile = `${baseName}_formatted.pdf`;
  }

  // Generate PDF
  const generator = new ResumePdfGenerator(outputFile);
  await generator.generateFromData(data);

  return outputFile;
}

/**
 * Main CLI function
 */
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  // Check for --pdf flag
  const pdfFlagIndex = args.indexOf("--pdf");
  const isPdf = pdfFlagIndex !== -1;
  if (isPdf) {
    args.splice(pdfFlagIndex, 1); // Remove the flag from args
  }

  if (args.length === 0) {
    console.log(
      "Usage: npx tsx scripts/resume-converter.ts <input.md> [-o output.file] [--pdf]"
    );
    console.log("\nOptions:");
    console.log(
      "  -o <file>   Specify output file (e.g., resume.docx or resume.pdf)"
    );
    console.log("  --pdf       Generate a PDF file instead of a DOCX file.");
    console.log("\nExamples:");
    console.log("  npx tsx scripts/resume-converter.ts resume.md");
    console.log(
      "  npx tsx scripts/resume-converter.ts resume.md -o custom_output.docx"
    );
    console.log(
      "  npx tsx scripts/resume-converter.ts resume.md -o custom_output.pdf --pdf"
    );
    process.exit(1);
  }

  const inputFile = args[0];
  let outputFile: string | undefined;

  // Parse output flag
  const outputIndex = args.indexOf("-o");
  if (outputIndex !== -1 && args[outputIndex + 1]) {
    outputFile = args[outputIndex + 1];
  }

  try {
    let generatedFile: string;
    if (isPdf) {
      generatedFile = await convertMarkdownToPdf(inputFile, outputFile);
      console.log(`✓ PDF Resume successfully generated: ${generatedFile}`);
    } else {
      generatedFile = await convertMarkdownToDocx(inputFile, outputFile);
      console.log(`✓ DOCX Resume successfully generated: ${generatedFile}`);
    }

    // Print parsed data summary
    const markdownContent = fs.readFileSync(inputFile, "utf-8");
    const parser = new MarkdownResumeParser(markdownContent);
    const data = parser.getData();

    console.log("\nParsed content summary:");
    console.log(`  - Name: ${data.header.name || "Not found"}`);
    console.log(`  - Title: ${data.header.title || "Not found"}`);
    console.log(`  - Skills categories: ${Object.keys(data.skills).length}`);
    console.log(`  - Experience entries: ${data.experience.length}`);
    console.log(`  - Education entries: ${data.education.length}`);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }
}

// Run if executed directly (ES module check)
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
}

// Export for use as module
export {
  convertMarkdownToDocx,
  convertMarkdownToPdf,
  MarkdownResumeParser,
  ResumeDocxGenerator,
  ResumePdfGenerator,
};

export type { ResumeData, ContactInfo, Experience, Education };
