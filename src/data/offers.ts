// Source: ai-job-search/documents/consulting/offers.md. Prices stay off the site.
export interface Offer {
  name: string;
  forWho: string;
  gets: string[];
  proof: string;
  timeline: string;
  tags: string[];
}

const offers: Offer[] = [
  {
    name: "MCP server for your company's data",
    forWho: "Teams that want Claude, Cursor or internal agents to read and act on their own systems.",
    gets: [
      "An MCP server exposing the operations your team needs, designed with you in a kickoff session.",
      "Each tool call runs with the calling user's own permissions, so the agent can never do more than the person using it.",
      "Evals that check the agent picks the right tools and reaches the right end state.",
      "Deployment on your infrastructure, and docs your engineers can extend.",
    ],
    proof: "First AI engineer at First Resonance: built an MCP server over manufacturing and supply-chain data that engineers used to find production bottlenecks.",
    timeline: "2 WEEKS",
    tags: ["MCP", "AUTH", "EVALS"],
  },
  {
    name: "Claude Code rollout for your engineering team",
    forWho: "Engineering teams with Claude Code licenses but no shared way of working with it.",
    gets: [
      "Team skills, rules and hooks committed to your repos, written for your stack and conventions.",
      "Automated checks that keep AI-written code within your standards.",
      "Hands-on onboarding sessions with your engineers, plus the written guides they work from.",
    ],
    proof: "Built First Resonance's Claude Code infrastructure and personally onboarded 12 engineers onto it.",
    timeline: "2 TO 3 WEEKS",
    tags: ["CLAUDE CODE", "SKILLS", "HOOKS"],
  },
  {
    name: "Evals for your AI agent",
    forWho: "Teams shipping an agent or chatbot with no reliable way to tell if a change made it better or worse.",
    gets: [
      "Reference sets built from your real use cases.",
      "Rubric graders that use an LLM as the judge, suited to output that varies from run to run.",
      "Scoring of tool use: which tools the agent called and how many calls a run took.",
      "An eval run you can repeat on every change, in Inspect AI or your existing stack.",
    ],
    proof: "Built the eval systems for TwelveLabs' agentic video editor and chatbot, with Inspect AI and Langfuse.",
    timeline: "2 WEEKS",
    tags: ["INSPECT AI", "LLM JUDGE", "LANGFUSE"],
  },
  {
    name: "Video-AI ingestion and retrieval pipeline",
    forWho: "Media and entertainment companies, and any product that needs to search or chat over video.",
    gets: [
      "An ingestion pipeline: a model describes incoming video, and queued jobs are processed by workers.",
      "A retrieval chatbot that answers questions against your documents and what happens in the video.",
      "FFmpeg-based processing and export where it's needed.",
    ],
    proof: "Built Othelia's video ingestion pipeline (Gemini frame descriptions, worker jobs) and TwelveLabs' server-side FFmpeg export.",
    timeline: "3 TO 4 WEEKS",
    tags: ["GEMINI", "WORKERS", "FFMPEG"],
  },
];

export default offers;
