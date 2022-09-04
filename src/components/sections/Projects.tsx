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
        <section
            id="projects"
            className="flex items-center flex-col w-full max-w-xxl mx-auto mt-20"
        >
            <Typography variant="h2" className="self-start">
                Projects
            </Typography>
            <div className="cardList">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}
