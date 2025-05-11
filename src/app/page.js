import Header from "@/components/header.js";
import Typewriter from "@/components/typewriter.js"
import HoverButton from "@/components/hoverbutton.js"
import DropdownButton from "@/components/dropdownbutton.js";

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

const courses = [
    "COMPENG 2DI4 - Logic Design",
    "COMPENG 2DX3 - Microprocessor Systems Project",
    "COMPENG 2SH4 - Principles of Programming",
    "COMPENG 2SI3 - Data Structures and Algorithms",
    "ELECENG 2CI4 - Introduction to Electrical Engineering",
    "ELECENG 2CF3 - Circuits and Waves",
    "ELECENG 2EI4 - Electronic Devices and Circuits I"
]

export default function Home() {
    return (
        
        <div className = "max-w-3xl mx-auto px-4">
            
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
            <div className="flex items-center gap-1 pt-10 pb-0">
                <div className="text-3xl font-bold font-outfit">
                    <Header>Relevant Courses</Header>
                </div>
                <DropdownButton className = "mt-1">{courses}</DropdownButton>
            </div>


        </div>
    )
}