import { ThemeProvider } from '@material-tailwind/react'
import type { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import About from '../components/sections/About'
import HeroSection from '../components/sections/HeroSection'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'

const IndexPage = () => {
    return (
        <ThemeProvider>
            <Layout>
                <HeroSection />
                <Skills />
                <About />
                <Projects />
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
