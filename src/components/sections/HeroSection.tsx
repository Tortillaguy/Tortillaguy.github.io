import { Avatar, Button, Chip, Typography } from '@material-tailwind/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
    InstagramLogo,
    LinkedinLogo,
    GithubLogo,
    EnvelopeOpen,
} from 'phosphor-react'
import { Fade } from 'react-reveal'
import { useMediaPredicate } from 'react-media-hook'
import { useEffect, useState } from 'react'

interface Social {
    name: string
    value: string
}

const getLogo = (title: string, props: any) => {
    switch (title) {
        case 'Instagram': {
            return <InstagramLogo {...props} />
        }
        case 'Linkedin': {
            return <LinkedinLogo {...props} />
        }
        case 'Mail': {
            return <EnvelopeOpen {...props} />
        }
        case 'Github': {
            return <GithubLogo {...props} />
        }
        default:
            return null
    }
}

export default function HeroSection() {
    const {
        site: {
            siteMetadata: { socials },
        },
    } = useStaticQuery<{
        site: { siteMetadata: { socials: Social[] } }
    }>(graphql`
        query HeroQuery {
            site {
                siteMetadata {
                    socials {
                        name
                        value
                    }
                }
            }
        }
    `)
    const mobile = useMediaPredicate('(max-width: 720px)')
    const [showVideo, setShowVideo] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const canPlay = () => {
        setShowVideo(true)
    }

    return (
        <section className="z-0 relative flex justify-center flex-col items-center gap-6 mx-auto w-full md:flex-row md:gap-10 md:h-96">
            <div className="absolute overflow-hidden bg-black [width:100vw] h-full">
                <video
                    onLoadedData={canPlay}
                    autoPlay
                    muted
                    loop
                    className="[width:100vw] h-full object-center object-cover [transform:scale(1.2)]"
                    src={
                        mobile
                            ? '/videos/letting_go.webm'
                            : '/videos/oblivion.webm'
                    }
                />
            </div>
            <Fade opposite when={!showVideo}>
                <div className="absolute overflow-hidden bg-black [width:100vw] h-full" />
            </Fade>
            <div className="absolute hero-gradient [width:100vw] h-full"></div>
            <Fade when={mounted} bottom distance="60px">
                <Avatar
                    src="/headshot.jpg"
                    variant="circular"
                    className="lg:w-52 lg:h-52 w-40 h-40 mt-10 lg:mt-0 drop-shadow border-2 border-cyan-400 border-opacity-90"
                />
            </Fade>
            <div className="flex flex-col items-start gap-2 md:text-left">
                <Fade when={mounted} right>
                    <Typography className="text-shadow" variant="h3">
                        Hey there!👋
                    </Typography>
                </Fade>
                <div>
                    <Fade when={mounted} right delay={600}>
                        <Typography
                            className="text-shadow color-white"
                            variant="h2"
                        >
                            I'm Adrian
                        </Typography>
                    </Fade>
                    <Fade when={mounted} delay={1400} right>
                        <Typography
                            className="text-shadow color-white"
                            variant="h4"
                        >
                            (But you can call me Cacho)
                        </Typography>
                    </Fade>
                </div>
                <Fade when={mounted} cascade right delay={2700}>
                    <div className="flex flex-col items-start md:flex-row md:justify-around md:gap-6 md:flex-nowrap">
                        <Typography
                            className="text-shadow color-white"
                            variant="h4"
                        >
                            Visual Artist 👾
                        </Typography>
                        <Typography
                            className="text-shadow color-white"
                            variant="h4"
                        >
                            Designer 🧩
                        </Typography>
                        <Typography
                            className="text-shadow color-white"
                            variant="h4"
                        >
                            Developer 🛠️
                        </Typography>
                    </div>
                </Fade>
                <div className="flex gap-4 mt-4 flex-wrap mx-auto justify-start">
                    <Fade
                        when={mounted}
                        cascade
                        right
                        delay={500}
                        duration={500}
                    >
                        {socials.map(({ name, value }) => (
                            <Button
                                variant="outlined"
                                className="p-2 Profile border-blueCore"
                            >
                                <Link
                                    to={value}
                                    target="_blank"
                                    className="flex items-center gap-2 px-2"
                                >
                                    {getLogo(name, {
                                        color: 'white',
                                        size: 16,
                                    })}
                                    <Typography
                                        className="normal-case"
                                        varint="body"
                                    >
                                        {name}
                                    </Typography>
                                </Link>
                            </Button>
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    )
}
