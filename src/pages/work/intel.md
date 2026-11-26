---
layout: ../../layouts/BlogPost.astro
---

Intel True VR put viewers inside live sports with 360-degree camera rigs at the venue: NBA and NFL games, and then the Winter Olympics. I worked on it in 2017 and 2018, across the app people watched in, the pipeline that fed it, and the system the content team ran it from.

## The app

I developed the True VR app in Unity and C#, the player viewers used to watch games in VR. It shipped on Android, iOS and Windows.

## The pipeline

Separately, I built the pipeline that produced and published the videos, in Python and FFmpeg on AWS. It transcoded captured footage into the formats each platform needed, including stereoscopic video with a separate stream per eye and adaptive bitrate for viewers on slower connections. It published to the True VR app and also to Facebook 360 and YouTube VR. More than 500 videos went through it, and editor turnaround dropped by 95%.

## The CMS

I also led the team of four that built the CMS behind it, in PHP, jQuery and Angular, where the content team managed 300+ pieces of VR and 360 media across live events, archived games and highlight reels. I designed the database schema and REST API too, which fed personalized content in the app based on each viewer's preferences and subscriptions.

## PyeongChang 2018

Intel True VR powered [NBC's live VR coverage of the 2018 Winter Olympics](https://www.nbcsports.com/pressbox/olympics/press-releases/nbc-olympics-to-provide-live-virtual-reality-coverage-of-the-winter-olympics-powered-by-intel-true-vr) in PyeongChang, announced at more than 50 hours and the first VR coverage of any Winter Games. I worked on that coverage directly. We covered most of the main events.
