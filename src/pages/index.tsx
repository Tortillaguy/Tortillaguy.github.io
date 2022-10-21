import { ThemeProvider } from '@material-tailwind/react'
import type { HeadFC } from 'gatsby'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import About from '../components/sections/About'
import Art from '../components/sections/Art'
import Contact from '../components/sections/Contact'
import HeroSection from '../components/sections/HeroSection'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

const IndexPage = () => {
    return (
        <ThemeProvider>
            <Layout>
                <HeroSection />
                <Art />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage

const description = 'VJ. 3D Artist. Developer [AR/VR/Web3]'

export const Head: HeadFC = () => (
    <>
        <title>VibeLabz</title>
        <meta name="description" content={description} />
        <meta name="image" content={'/headshot.jpg'} />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'VibeLabz'} />
        <meta name="og:title" content={'VibeLabz'} />
        <meta name="twitter:url" content={'https://vibelabz.xyz'} />
        <meta name="og:url" content={'https://vibelabz.xyz'} />
        <meta name="twitter:description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:image" content={'/headshot.jpg'} />
        <meta name="og:image" content={'/headshot.jpg'} />
        <meta name="twitter:creator" content={'@dot_vibez'} />
        <script>
            {`if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }`}
        </script>
    </>
)
