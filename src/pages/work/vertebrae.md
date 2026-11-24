---
layout: ../../layouts/BlogPost.astro
---

Vertebrae turned retail product catalogs into 3D models that shoppers could view in AR on their phones. More than 100 retail vendors used it. I joined in August 2020, when the company was about 15 people, and Snap [acquired it in July 2021](https://insideretail.asia/2021/07/20/snap-bets-on-ar-shopping-in-latest-acquisition/) to build out AR shopping on Snapchat.

## The pipeline

I built the 3D pipeline. It ran Blender on EC2, and one config file decided what each product turned into: GLB for the web and Android, USDZ for Apple's Quick Look, and whatever other formats a given renderer needed.

Product models rarely arrive ready for a phone. Using Blender's Python API, the pipeline decimated meshes down to a polygon budget, re-meshed geometry that needed it, and reassigned materials so they rendered correctly on each target. More than 50,000 assets went through it.

## Around it

I also built the Postgres backend and API that tracked those assets (SKUs, versions, processing status) and controlled which vendor teams could see what.

For the technical artists, I built a desktop review tool in Electron, React and Three.js. They could preview a processed model in real time and approve it for delivery to the client without opening Blender.

## Snap

After Snap acquired Vertebrae, the target changed from retail websites to Snapchat's AR. Because the outputs were set in config, adapting the pipeline meant changing optimization targets and formats rather than rebuilding it.
