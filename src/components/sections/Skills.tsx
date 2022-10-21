import { Chip, Typography } from '@material-tailwind/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Flip } from 'react-reveal'
import { SkillChip } from '../SkillChip'

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
            className="flex items-center flex-col mx-auto max-w-xxl w-full gap-3 mt-8"
        >
            <Typography
                className="self-center underline-offset-4 underline"
                variant="h2"
            >
                Skills
            </Typography>
            <Flip cascade bottom>
                <div className="flex gap-4 flex-wrap max-w-2xl justify-evenly">
                    {skills.map(({ name }, id) => (
                        <SkillChip skill={name} />
                    ))}
                </div>
            </Flip>
        </section>
    )
}
