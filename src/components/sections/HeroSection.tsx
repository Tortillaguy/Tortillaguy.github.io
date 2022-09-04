import { Avatar, Button, Chip, Typography } from '@material-tailwind/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
    InstagramLogo,
    LinkedinLogo,
    GithubLogo,
    EnvelopeOpen,
} from 'phosphor-react'
import { Fade } from 'react-reveal'
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

    return (
        <section className="flex justify-center flex-col items-center mt-8 gap-6 mx-auto w-full md:flex-row md:gap-10 md:h-96">
            <Fade bottom distance="60px">
                <Avatar
                    src="/headshot.jpg"
                    variant="circular"
                    className="w-52 h-52"
                />
            </Fade>
            <div className="flex flex-col items-start gap-2 md:text-left">
                <Fade right>
                    <Typography variant="h3">Hey there!👋</Typography>
                </Fade>
                <div>
                    <Fade right delay={600}>
                        <Typography variant="h2">I'm Adrian</Typography>
                    </Fade>
                    <Fade delay={3000} right>
                        <Typography variant="h4">
                            (But you can call me Cacho)
                        </Typography>
                    </Fade>
                </div>
                <Fade cascade right delay={1400}>
                    <div className="flex flex-wrap flex-col items-start md:flex-row md:justify-around md:gap-6 ">
                        <Typography variant="h4">Engineer 🛠️</Typography>
                        <Typography variant="h4">Designer 🧩</Typography>
                        <Typography variant="h4">Artist 🎨</Typography>
                    </div>
                </Fade>
                <div className="flex gap-4 mt-4 flex-wrap mx-auto justify-start">
                    <Fade cascade right delay={500} duration={500}>
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
