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
        <section className="">
            <Typography variant="h2">Projects</Typography>
            <div className="flex flex-nowrap gap-4 overflow-x-auto md:flex-wrap md:overflow-x-hidden">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}
