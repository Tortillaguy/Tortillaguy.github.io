import {
    Card as CardBase,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from '@material-tailwind/react'

interface ProjectCardProps {
    name: string
    imageSrc: string
    excerpt: string
    skills: string[]
}

export default function ProjectCard({
    name,
    excerpt,
    skills,
    imageSrc,
}: ProjectCardProps) {
    return (
        <CardBase className="w-30">
            <CardHeader floated={false} className="h-50">
                <img src="/headshot.jpg" alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Natalie Paisley
                </Typography>
                <Typography color="blue" className="font-medium" textGradient>
                    CEO / Co-Founder
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Typography>Footer</Typography>
            </CardFooter>
        </CardBase>
    )
}
