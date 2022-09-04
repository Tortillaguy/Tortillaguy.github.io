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
        <Link to={link} target="_blank">
            <CardBase className="w-56 glass transform transition duration-300 hover:-translate-y-4">
                <CardHeader
                    floated={false}
                    className=" h-48 mx-auto w-full mt-0 rounded-none rounded-t-2xl"
                >
                    <img
                        className="object-cover w-full h-full object-center"
                        src={`/images/${image}`}
                        alt="profile-picture"
                    />
                </CardHeader>
                <CardBody className="text-center p-2 py-6 gap-5 flex flex-col">
                    <Typography variant="h5" className="">
                        {name}
                    </Typography>
                    {role && (
                        <Typography
                            className="font-medium text-[#7effff]"
                            textGradient
                        >
                            {role}
                        </Typography>
                    )}
                </CardBody>
                {/* <CardFooter className="flex justify-center gap-7 pt-2">
                    <Typography>{role}</Typography>
                </CardFooter> */}
            </CardBase>
        </Link>
    )
}
