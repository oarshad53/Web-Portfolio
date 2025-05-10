import Header from "@/components/header.js";

// Notes on Tailwind
// pt-25 means top padding, pb-0 means bottom padding

const welcomeParagraph = `Hello, my name is Omar and I am a second year Computer Engineering student at McMaster University.
My primary interests within ECE are in embedded systems, both low and high level programming, and PCB design, to name a few.
I hope to outline my projects, skill sets, and relevant courses within this portfolio. Thank you for reading.`

export default function Home() {
    return (
        
        <div className = "max-w-3xl mx-auto px-4 ">
            <Header className = "text-5xl font-bold font-outfit pt-25 pb-0">Omar Arshad</Header>
            <p className = "font-outfit text-lg pt-10 pb-0">{welcomeParagraph}</p>
        </div>
    )
}