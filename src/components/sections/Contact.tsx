import { Button, IconButton, Typography } from '@material-tailwind/react'
import { PaperPlaneTilt } from 'phosphor-react'

export default function Contact() {
    return (
        <section
            id="contact"
            className="w-full max-w-xxl mt-20 flex flex-col items-center"
        >
            <Button className="hover:shadow-bone bg-blueCore hover:shadow-md bg-gradient-to-tr from-indigo-600 to-purple-400">
                <a
                    href="mailto:hello@vibelabz.xyz"
                    target="_blank"
                    className="text-xl flex justify-center gap-8 items-center"
                >
                    Say Hello
                    <PaperPlaneTilt
                        color="white"
                        size={24}
                        style={{ transform: 'scaleX(-1)' }}
                    />
                </a>
            </Button>
        </section>
    )
}
