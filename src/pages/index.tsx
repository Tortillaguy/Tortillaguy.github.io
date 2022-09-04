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

const IndexPage = () => {
    const [isloaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (
        <ThemeProvider>
            <Layout>
                <div style={{ visibility: isloaded ? 'visible' : 'hidden' }}>
                    <HeroSection />
                    <Skills />
                    <About />
                    <Projects />
                    <Art />
                    <Contact />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
