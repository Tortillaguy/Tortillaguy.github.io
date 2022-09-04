import React, { useState, useEffect } from 'react'
import {
    Navbar as NavbarBase,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from '@material-tailwind/react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const {
        site: {
            siteMetadata: { title },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpenNav(false)
        )
    }, [])

    const navList = (
        <ul className="mb-4 mt-2 items-end sm:px-14 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 text-white">
            <Typography as="li" className="NavLink">
                <a href="#skills" className="flex items-center">
                    Skills
                </a>
            </Typography>
            <Typography as="li" className="NavLink">
                <a href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography as="li" className="NavLink">
                <a href="#projects" className="flex items-center">
                    Projects
                </a>
            </Typography>
            <Typography as="li" className="NavLink">
                <a href="#art" className="flex items-center">
                    Art
                </a>
            </Typography>
            <Typography as="li" className="NavLink">
                <a href="#contact" className="flex items-center">
                    Say Hello
                </a>
            </Typography>
        </ul>
    )

    return (
        <header>
            <NavbarBase className="mx-auto max-w-screen-xl py-2 px-4 md:px-8 md:py-4 border-none rounded-none rounded-b-lg bg-blueCore shadow-blue-gray-900 shadow-md">
                <div className="container mx-auto flex items-center justify-between text-bone">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
                    >
                        <span>{title}</span>
                    </Typography>
                    <div className="hidden md:block">{navList}</div>
                    <Button
                        variant="gradient"
                        size="sm"
                        className="hidden md:inline-block bg-gradient-to-tr from-indigo-900 to-purple-400"
                    >
                        <span>Get the Resume</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className="mb-2"
                    >
                        <span>Get the Resume</span>
                    </Button>
                </MobileNav>
            </NavbarBase>
        </header>
    )
}
