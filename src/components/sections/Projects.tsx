import { Typography } from '@material-tailwind/react'
import { graphql, useStaticQuery } from 'gatsby'
import { Project } from '../../types/Project'
import ProjectCard from '../ProjectCard'

export default function Projects() {
    const data = useStaticQuery<{
        site: { siteMetadata: { projects: Project[] } }
    }>(graphql`
        query ProjectsQuery {
            site {
                siteMetadata {
                    projects {
                        name
                        image
                        link
                        role
                    }
                }
            }
        }
    `)
    const {
        site: {
            siteMetadata: { projects },
        },
    } = data
    return (
        <section className="flex items-center flex-col w-full max-w-xxl mx-auto">
            <Typography variant="h2" className="self-start">
                Projects
            </Typography>
            <div
                className="flex flex-nowrap overflow-x-auto w-full gap-5 py-4 md:grid md:gap-y-6 md:w-full md:justify-center md:justify-items-center"
                style={{
                    gridTemplateColumns:
                        'repeat(auto-fit, minmax(250px, 277px))',
                }}
            >
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}
