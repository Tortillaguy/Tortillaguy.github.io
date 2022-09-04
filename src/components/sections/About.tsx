import { Typography } from '@material-tailwind/react'

export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-xl flex flex-col mx-auto mt-12"
        >
            <Typography variant="h2">About Me</Typography>
            <div className="max-w-xl w-full self-center">
                <Typography variant="body">
                    Add some text here about how cool I am
                </Typography>
            </div>
        </section>
    )
}
