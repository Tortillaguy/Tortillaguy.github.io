import { Typography } from '@material-tailwind/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Project } from '../../types/Project'
import ProjectCard from '../ProjectCard'

export default function Art() {
    const data = useStaticQuery<{
        site: { siteMetadata: { art: Project[] } }
    }>(graphql`
        query ArtQuery {
            site {
                siteMetadata {
                    art {
                        name
                        image
                        link
                    }
                }
            }
        }
    `)
    const {
        site: {
            siteMetadata: { art },
        },
    } = data
    return (
        <section
            id="art"
            className="flex items-center flex-col w-full max-w-xxl mx-auto mt-8"
        >
            <Typography
                variant="h2"
                className="self-center underline-offset-4 underline"
            >
                Art
            </Typography>
            <div className="cardList">
                {art.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}
