import { Typography } from '@material-tailwind/react'

export const SkillChip = ({ skill }: { skill: string }) => {
    return (
        <div className="normal-case flex gap-2 items-center px-2 py-2 text-md  bg-inherit ">
            <Typography className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purpleCore to-blueCore text-4xl ">
                #
            </Typography>
            <Typography className="text-bone text-2xl font-bold self-end skill-glow">
                {skill}
            </Typography>
        </div>
    )
}
