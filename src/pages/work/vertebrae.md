---
layout: ../../layouts/BlogPost.astro
---

Vertebrae turned retail product catalogs into 3D models that shoppers could view in AR on their phones. More than 100 retail vendors used it. I joined in August 2020, on an engineering team of about 15 in a company of about 50, and Snap [acquired it in July 2021](https://insideretail.asia/2021/07/20/snap-bets-on-ar-shopping-in-latest-acquisition/) to build out AR shopping on Snapchat.

## The pipeline

I built the 3D pipeline in Python and FastAPI on AWS (S3, Lambda, SQS and EC2). It ran Blender, and one config file decided what each product turned into: GLB for the web and Android, USDZ for Apple's Quick Look, and whatever other formats a given renderer needed.

Product models rarely arrive ready for a phone. Using Blender's Python API, the pipeline decimated meshes down to a polygon budget, re-meshed geometry that needed it, and reassigned materials so they rendered correctly on each target. More than 50,000 assets went through it with 95% of the work automated, and company throughput tripled. Automating vendor onboarding cut the manual work there by 95% for 20+ brand partners.

## Around it

I also built the Postgres backend and API that tracked those assets (SKUs, versions, processing status) and controlled which vendor teams could see what.

For the technical artists, I built a desktop review tool in Electron, React and Three.js. They could preview a processed model in real time and approve it for delivery to the client without opening Blender. It saved the art team about 15 hours a week.

## Snap

After Snap acquired Vertebrae, the target changed from retail websites to Snapchat's AR. Because the outputs were set in config, adapting the pipeline meant changing optimization targets and formats rather than rebuilding it.
