import Header from "@/components/header.js";
import Typewriter from "@/components/typewriter.js"
import HoverButton from "@/components/hoverbutton.js"

// Notes on Tailwind
// pt-25 means top padding, pb-0 means bottom padding

const welcomeParagraph = `Hello and welcome to my portfolio. I am a second year Computer Engineering student at McMaster University. 
My primary interests in ECE are in embedded systems, both low and high level programming, and PCB design, to name a few. My projects, 
skillset, and relevant courses are outlined below and I hope to showcase some of my skills here.`

const skills = [
    { iconPath: "/icons/altiumicon.png", text: "Altium Designer"},
    { iconPath: "/icons/arduinoicon.png", text: "Arduino"},
    { iconPath: "/icons/autodeskicon.png", text: "Autodesk Inventor"},
    { iconPath: "/icons/giticon.png", text: "Git"},
    { iconPath: "/icons/luauicon.png", text: "Luau"},
    { iconPath: "/icons/nexticon.png", text: "Next.js"},
    { iconPath: "/icons/pythonicon.png", text: "Python"},
    { iconPath: "/icons/tailwindicon.png", text: "Tailwind CSS"},
    { iconPath: "/icons/cppicon.png", text: "C++"}
];

export default function Home() {
    return (
        
        <div className = "max-w-3xl mx-auto px-4 ">
            
            <Typewriter className = "text-5xl font-bold font-outfit pt-25 pb-0">Omar Arshad</Typewriter>
            <p className = "font-outfit text-lg pt-10 pb-0">{welcomeParagraph}</p>

            <Header className = "text-3xl font-bold font-outfit pt-10 pb-10">Skills and Technologies</Header>

            <div className = "grid grid-cols-3 gap-6">
                
                {skills.map((skill, index) =>
                <HoverButton 
                key={index}
                iconPath = {skill.iconPath}
                text = {skill.text}
                textClassName = "text-2x1 font-bold font-outfit text-black"
                className = "mx-3">
                </HoverButton>

            )}
            </div>

            <Header className = "text-3xl font-bold font-outfit pt-10 pb-0">Relevant Courses</Header>
        </div>
    )
}