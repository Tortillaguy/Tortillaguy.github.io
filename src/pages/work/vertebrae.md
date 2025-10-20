---
layout: ../../layouts/BlogPost.astro
---

# Scaling 3D Commerce: From Vertebrae to Snap Inc.

**August 2020 - March 2022**

When I joined Vertebrae as a Full-Stack & DevOps Engineer, the company was on a mission to transform e-commerce through 3D and augmented reality. Imagine shopping online, but instead of flat product photos, you could view items in photorealistic 3D, place them in your room with AR, and interact with them from every angle.

We were working with major retail brands—over **100 vendors**—to convert their product catalogs into immersive 3D experiences. The scale was massive: **over 50,000 3D assets** needed to be processed, optimized, and delivered for mobile AR.

And then, mid-way through my time there, **Snap Inc. acquired the company**. Suddenly we weren't just building for retail—we were building for Snapchat's AR platform, reaching hundreds of millions of users.

<iframe width="560" height="315" class="m-auto w-full md:w-[560px]" src="https://www.youtube.com/embed/hpn2RiNkLWI?si=0rU_br-5OK6LYktZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## The Pipeline Challenge: 50,000 3D Assets

The core technical challenge was scale. Retail brands would send us product CAD files, and we needed to transform them into mobile-ready AR assets. This wasn't just a matter of file conversion—it was an entire **automated pipeline**:

### Infrastructure: AWS + Docker + Node.js

I built automated processing pipelines using:

- **AWS** for scalable cloud infrastructure (S3 for storage, EC2 for processing, Lambda for event triggers)
- **Docker** for containerized processing environments (consistent processing regardless of the asset)
- **Node.js** for orchestration and API services

The workflow looked like:
1. Vendor uploads raw 3D asset (often multi-gigabyte CAD files)
2. AWS Lambda triggers processing job
3. Docker container spins up with all necessary 3D processing tools
4. Asset goes through optimization pipeline (see below)
5. Optimized files uploaded to CDN for delivery
6. Vendor dashboard updates with preview and status

At peak, we were processing **hundreds of assets per day**, all automatically.

### The Art of 3D Optimization

Mobile AR has brutal constraints: limited processing power, smaller file sizes, real-time rendering requirements. Taking a high-fidelity CAD model and making it work on a phone is non-trivial.

I built automation using **Blender's Python API** and **Node.js** to handle:

#### Decimation (Polygon Reduction)
- High-res models might have millions of polygons
- Mobile AR needs thousands, not millions
- Automated algorithms to reduce geometry while preserving visual quality
- Different LOD (level of detail) versions for different use cases

#### Re-meshing
- Clean up topology for better rendering performance
- Fix broken geometry from CAD conversions
- Optimize UV mapping for texture efficiency

#### Material Re-assignment
- Convert complex material setups to mobile-friendly PBR (Physically Based Rendering)
- Bake lighting and detail into texture maps
- Ensure materials work in AR lighting conditions

The entire process was **fully automated**—upload a file, get back an optimized AR-ready asset.

### Quality at Scale

Processing 50,000 assets automatically is one thing. Ensuring they all look good is another. I implemented:
- **Automated quality checks** (polygon count validation, texture size limits, file format verification)
- **Visual regression testing** (rendered previews compared against reference images)
- **Manual review queues** for edge cases that needed artist input

This balance of automation and human oversight was key to maintaining quality while scaling.

## Backend Architecture: Supporting 100+ Retail Vendors

Beyond the processing pipeline, we needed a robust backend to manage the entire system.

### Database Design: Postgres + SQL

I developed backend features using **Postgres** to handle:

- **Asset management** - Metadata for 50,000+ 3D models (SKUs, versions, processing status)
- **Vendor management** - 100+ retail brands, each with different product catalogs
- **Conversion job tracking** - Status, logs, retries for thousands of processing jobs
- **User permissions** - Role-based access for different vendor teams

The database design needed to handle:
- **High write throughput** (constant asset uploads and status updates)
- **Complex queries** (vendors searching their catalogs, filtering by status, sorting by date)
- **Reliability** (retail partners depend on accurate data)

Optimizing these queries—proper indexing, query planning, connection pooling—was critical for performance at scale.

### API Design

I built RESTful APIs (and later GraphQL) to support:
- Vendor dashboard applications
- Internal processing tools
- External integrations with retail systems

Every retail partner had different needs, so the API needed flexibility while maintaining performance.

## Frontend: Tools for Technical Artists

While much of my work was backend and DevOps, I also built **custom React applications** to support our technical artists.

### The Challenge

Tech artists were doing manual 3D work in Blender, but they needed:
- Quick previews of how assets would look in AR
- Batch processing tools for similar products
- QA interfaces to approve or reject processed assets

### The Solution: Electron + React + Three.js + WebGL

I built **bespoke desktop applications** using:

- **Electron** - Cross-platform desktop apps
- **React** - UI components and state management
- **Three.js / WebGL** - Real-time 3D preview rendering
- **Node.js backend** - Integration with our processing pipelines

Artists could:
- Drag-and-drop 3D files for instant preview
- See exactly how the asset would render on mobile
- Adjust optimization settings and re-process
- Approve assets for delivery to clients

These tools **dramatically improved artist productivity**, reducing time from upload to approval.

## The Snap Acquisition: Pivoting to Snapchat AR

Midway through my tenure, **Snap Inc. acquired Vertebrae**. This changed everything.

Suddenly we weren't just building for retail websites—we were building for **Snapchat's AR platform**, with:
- Hundreds of millions of potential users
- Different technical constraints (Snapchat's AR engine vs. WebAR)
- New use cases (virtual try-on, AR shopping within Snapchat)

The pipelines I'd built were flexible enough to adapt. We tweaked optimization targets, adjusted formats, and integrated with Snap's infrastructure. The fundamentals—automated 3D processing at scale—remained the same.

## What I Learned

This role pushed me in several directions:

1. **DevOps at scale** - Building pipelines that process tens of thousands of assets reliably
2. **3D optimization** - Deep understanding of geometry, materials, and rendering performance
3. **Backend architecture** - Designing systems that support complex workflows for 100+ clients
4. **Blender Python API** - Automating 3D content creation programmatically
5. **Electron app development** - Building desktop tools for technical workflows
6. **M&A transition** - Navigating a company acquisition and adapting to new priorities

## Reflections

Vertebrae taught me that **automation is everything** when you're operating at scale. Manually processing even 100 assets would be tedious; 50,000 is impossible without robust automation.

But the real lesson was about **building flexible systems**. When Snap acquired us, the fact that our pipelines were modular and configurable meant we could pivot quickly. That flexibility—building for change rather than just current requirements—has informed every infrastructure project I've worked on since.

Today, when I'm optimizing 3D assets for web experiences or building content pipelines for creative projects, I still use the automation patterns I developed at Vertebrae. And understanding the full stack—from Blender Python scripts to Docker containers to React frontends to Postgres databases—that holistic view is invaluable.

Plus, seeing furniture you helped render in AR show up on a retail site or in Snapchat? That's a pretty cool "I built that" moment.

---

**Tech Stack:** AWS, Docker, Node.js, Postgres, SQL, React, Three.js, WebGL, Electron, Blender (Python API), Python, REST APIs, GraphQL

**Company:** Vertebrae (acquired by Snap Inc.)

**Role:** Full-Stack & DevOps Engineer

**Key Outcomes:**
- Built automated pipelines processing 50,000+ 3D assets for mobile AR
- Supported 100+ retail vendor partnerships (e-commerce brands)
- Automated 3D optimization: decimation, re-meshing, material re-assignment
- Created custom Electron desktop tools for technical artists
- Designed Postgres database architecture for asset management at scale
- Transitioned infrastructure and pipelines during Snap Inc. acquisition

**Scale:** 50,000+ 3D assets, 100+ retail vendors

**Acquisition:** Acquired by Snap Inc. in 2021
