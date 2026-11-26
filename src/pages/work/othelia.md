---
layout: ../../layouts/BlogPost.astro
---

Othelia is a seed-stage startup building narrative intelligence for story franchises. A studio puts its scripts, story bibles and footage in one place, then asks questions across all of it. The platform had opened in beta in October 2025, with an exclusive in [Variety](https://variety.com/2025/tv/news/othelia-launches-ai-storytelling-platform-1236562404/). It [works with Amazon MGM Studios across multiple tentpole franchises](https://aws.amazon.com/marketplace/pp/prodview-v7dbttm53vwfe). I joined on contract in September 2026 to get it to general availability, which it reached that October.

## Starting cold

There was almost no onboarding. I got repo access and a launch date.

The video pipeline already existed, built before I arrived, and it was the part of the product GA depended on most. So the first stretch was reading: following one video from upload to the moment the chatbot could answer a question about it, and writing down everything in between.

## The pipeline

Uploads become jobs. Workers pick them up, send frames to Gemini Vision for descriptions, and store the text so the retrieval chatbot can search footage the same way it searches documents.

The version I inherited was slow, and it had redundant stages doing overlapping work. Those extra stages were also dragging accuracy down. I took them out. That made the pipeline faster and the descriptions more accurate at the same time.

To check it was more accurate and not just different, I set up evals. They scored accuracy and latency against rubrics and reference sets, and every run was recorded in Langfuse so each change could be compared against the last.

I owned that path end to end, along with the TanStack server and web app on Node.js that sit in front of it.

## What the user sees

Processing a video takes a while. I designed the upload flow so the UI shows which phase of the pipeline the job is in while it runs.

When the job finishes, the user lands on a review page that lays out everything the pipeline picked up from the video, and they choose what to keep.

## Getting to launch

About 200 people had signed up before GA, and at launch we moved them onto Team plans. New users needed a way in, so I built the onboarding flow and simplified the interface around it.

Speed was the other half. Page loads, click navigation and API responses all got about 75% faster.

CI deploys took half as long. I added caching, ran jobs in parallel, and split the unit tests into tiers so a deploy only waited on the ones that mattered for it.
