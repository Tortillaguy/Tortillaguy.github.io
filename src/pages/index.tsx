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

export const Head: HeadFC = () => <title>VibeLabz</title>
