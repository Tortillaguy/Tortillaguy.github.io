import { Chip, Typography } from '@material-tailwind/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Flip } from 'react-reveal'

interface Skill {
    name: string
}

export default function Skills() {
    const data = useStaticQuery<{
        site: { siteMetadata: { skills: Skill[] } }
    }>(graphql`
        query SkillsQuery {
            site {
                siteMetadata {
                    skills {
                        name
                    }
                }
            }
        }
    `)
    const {
        site: {
            siteMetadata: { skills },
        },
    } = data

    return (
        <section
            id="skills"
            className="flex items-center flex-col mx-auto max-w-xl w-full gap-3 mt-8"
        >
            <Typography className="self-start" variant="h2">
                Skills
            </Typography>
            <Flip cascade bottom delay={1000}>
                <div className="flex gap-4 flex-wrap max-w-xl">
                    {skills.map(({ name }) => (
                        <Chip
                            className="normal-case text-md bg-[#3B8EA5]"
                            value={name}
                        />
                    ))}
                </div>
            </Flip>
        </section>
    )
}
