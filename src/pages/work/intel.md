---
layout: ../../layouts/BlogPost.astro
---

# Bringing VR to Live Sports: Intel True VR

**~2017 - 2018**

Before VR headsets became household items, Intel had a bold vision: what if you could watch live NBA and NFL games from courtside seats—without leaving your couch? I joined the Intel True VR team as a Content Management Specialist to help make that vision a reality.

This wasn't just streaming video. We were capturing live sports events with multi-camera VR rigs, processing massive amounts of 360-degree footage in real-time, and delivering immersive experiences to VR headsets across multiple platforms. The technical challenges were enormous, and honestly, some of the most fun I've had in my career.

<iframe width="560" height="315" class="m-auto w-full md:w-[560px]" src="https://www.youtube.com/embed/-nWddbP-hgo?si=WfZoy9QYlsnUCDwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Leading Development: The CMS Platform

One of my primary responsibilities was managing a team of developers to build a comprehensive content management system. This wasn't your typical WordPress setup—we needed a CMS that could handle:

- **Live VR video streams** from sporting events
- **Multi-platform distribution** (Android, iOS, Windows VR headsets)
- **Real-time content scheduling** synchronized with actual games
- **Massive file management** for 360-degree video assets

We built the platform using **PHP, jQuery, and Angular**—the web stack of choice at the time. My role involved:
- Overseeing the entire development lifecycle from planning to deployment
- Coordinating with stakeholders at Intel and sports leagues
- Ensuring code quality and meeting tight deadlines (live sports wait for no one!)
- Designing the information architecture for managing thousands of VR video assets

The CMS became the operational backbone for Intel's True VR service, enabling content teams to manage live events, archived games, and highlight reels efficiently.

## VR Development: Unity Across All Platforms

While the CMS handled content management, we also needed robust VR applications for users. I dove into **Unity development**, building and enhancing VR features across **Android, iOS, and Windows** using **C#**.

The cross-platform challenge was real:
- **Android VR** (Gear VR, Daydream) had different performance constraints
- **iOS** required optimizations for mobile hardware
- **Windows VR** (Oculus Rift, HTC Vive) could handle higher fidelity but needed different interaction models

Each platform had its quirks, and maintaining feature parity while optimizing for each device's strengths was a constant balancing act. But seeing someone put on a headset and feel like they're sitting courtside at an NBA game? That made all the debugging worth it.

## Design Thinking: UX for Virtual Worlds

VR UX design is fundamentally different from web or mobile design. You're not designing for a screen—you're designing for **presence**, for the feeling of actually being somewhere.

I was responsible for:
- **UX/UI design** for both the VR applications and web CMS
- **User story mapping** to understand how fans would interact with live sports in VR
- **Spatial interface design** (menus floating in 3D space, intuitive gesture controls)
- **Accessibility considerations** (VR can cause motion sickness—designing to minimize discomfort was critical)

This work taught me to think about interfaces in three dimensions and consider the embodied experience of users, skills that have informed every immersive project I've worked on since.

## Automation: Scaling Content Pipelines

Here's where things got really interesting from a DevOps perspective. Live sports generate **massive amounts of video content**, and we needed to process, transcode, and distribute it quickly.

### AWS-Powered Content Pipelines

I built automated content pipelines using **AWS** that connected multiple backend frameworks:
- Ingested raw 360-degree video from capture rigs
- Automatically routed content through processing stages
- Triggered transcode jobs based on content type and target platform
- Synced finished assets with the CMS and distribution networks

The automation meant content could flow from camera to viewer with minimal manual intervention—essential when you're dealing with live events happening across multiple time zones.

### FFmpeg Transcoding for Multi-Platform VR

One of my favorite technical challenges was automating VR video transcoding using **Python and FFmpeg**. VR video isn't just about resolution—you need to handle:
- **Equirectangular projections** (the 360-degree format)
- **Stereoscopic video** (separate streams for each eye)
- **Platform-specific codecs** (Facebook 360 has different requirements than YouTube VR)
- **Adaptive bitrate streaming** for varying network conditions

I wrote Python scripts that:
1. Analyzed incoming VR video files
2. Determined optimal transcode settings for each target platform
3. Parallelized FFmpeg jobs across multiple AWS instances
4. Validated output quality and format compliance
5. Automatically uploaded to social media platforms and CDNs

This automation was **crucial** for distribution—we could publish a highlight reel from a game to Facebook, YouTube, and in-app simultaneously, all with proper VR formatting for each platform.

## Cross-Platform Social Distribution

Getting VR content onto social media platforms was non-trivial. Each platform had specific requirements:
- **Facebook 360** required spatial audio metadata
- **YouTube VR** needed specific projection metadata in the video file
- Mobile platforms had file size constraints
- Desktop platforms could handle higher quality

The automated pipeline I built ensured compatibility across all platforms, dramatically reducing the manual workload for the content team and enabling us to scale distribution as the service grew.

## What I Learned

This role was formative in several ways:

1. **Team leadership** - Managing developers across different time zones taught me the importance of clear communication and documentation
2. **Cross-platform development** - Building for Android, iOS, and Windows VR simultaneously taught me to abstract platform differences and build flexible architectures
3. **DevOps mindset** - Automating content pipelines showed me the power of treating infrastructure as code
4. **VR design principles** - Understanding spatial UX design has informed every immersive project since
5. **Video encoding expertise** - Deep knowledge of FFmpeg and video codecs became a superpower for many future projects
6. **Live production constraints** - Working with live sports taught me to build systems that handle time-critical workflows

## The Bigger Picture

Intel True VR was ahead of its time. While the service eventually wound down, the technology and workflows we pioneered influenced how live VR content is produced today. The lessons about **real-time content processing**, **cross-platform distribution**, and **immersive UX design** have proven timeless.

Today, when I'm working on live visual productions or building content pipelines for creative projects, I still draw on the automation and video processing skills I developed during this period. And understanding how to optimize content for different platforms? That's become even more valuable as the landscape has grown more fragmented.

Plus, getting paid to watch NBA games in VR while "testing the user experience"? Not a bad gig.

---

**Tech Stack:** Unity, C#, PHP, jQuery, Angular, Python, FFmpeg, AWS, VR (Android/iOS/Windows), Video Encoding, Content Pipelines

**Role:** Content Management Specialist / VR Developer

**Platforms:** Gear VR, Daydream, Oculus Rift, HTC Vive, iOS, Android, Windows

**Impact:**
- Led development team for enterprise CMS platform
- Built VR applications across 3+ major platforms
- Automated content pipelines processing thousands of VR video assets
- Enabled multi-platform social media distribution
