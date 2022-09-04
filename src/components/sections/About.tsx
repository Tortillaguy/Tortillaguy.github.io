import { Typography } from '@material-tailwind/react'
import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-xxl flex flex-col justify-center mx-auto mt-12"
        >
            <div className="flex w-full justify-center flex-col md:flex-row gap-8 mt-10">
                <div className="flex flex-col gap-8 z-10 md:[width:30rem]">
                    <Typography variant="h2">About Me</Typography>
                    <Typography variant="lead" className="md:text-2xl">
                        I'm a software engineer and artist with over 7+ years
                        experience developing interactive installations and
                        apps.
                        <br />
                        <br />
                        My works range from projection mapped live visuals to
                        augmented reality clothing to sport spectating in VR.
                        I've had the pleasure of working with large brands like
                        Intel, Magic Leap, and Snap, to name a few.
                        <br />
                        <br /> My interests lie in 3D art, electronic music,
                        technoculture, and exploring the world.
                    </Typography>
                </div>
                <StaticImage
                    className="md:[width:20rem] rounded-xl"
                    src="../../images/wabi.jpg"
                    alt="casa-wabi"
                />
            </div>
        </section>
    )
}
