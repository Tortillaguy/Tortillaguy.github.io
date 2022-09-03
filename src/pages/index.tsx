import { ThemeProvider } from '@material-tailwind/react'
import type { HeadFC } from 'gatsby'
import Layout from '../components/Layout'
import HeroSection from '../components/sections/HeroSection'

const IndexPage = () => {
    return (
        <ThemeProvider>
            <Layout>
                <HeroSection />
            </Layout>
        </ThemeProvider>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
