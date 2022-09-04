import {
    Card as CardBase,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
} from '@material-tailwind/react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Project } from '../types/Project'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { name, image, link, role } = project
    return (
        <Link to={link}>
            <CardBase className="w-56">
                <CardHeader floated={false} className=" h-32 w-32 mx-auto">
                    <img
                        className="object-cover w-full h-full object-top"
                        src={`/images/${image}`}
                        alt="profile-picture"
                    />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography
                        color="blue"
                        className="font-medium"
                        textGradient
                    >
                        {role}
                    </Typography>
                </CardBody>
                {/* <CardFooter className="flex justify-center gap-7 pt-2">
                    <Typography>{role}</Typography>
                </CardFooter> */}
            </CardBase>
        </Link>
    )
}
