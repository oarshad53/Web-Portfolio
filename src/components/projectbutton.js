'use client';
import Link from 'next/link'

export default function ProjectButton ( { iconPath, text, textClassName, className, href } ) {

    return (
        <div className = {`h-60 rounded-xl relative overflow-hidden group flex items-center justify-center bg-white ${className}`}>

            <Link href={href}></Link>

            <img src={iconPath} className="w-full h-full object-cover" alt={text}></img>

            <div className = "absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl bg-white/40">
                {/* Blur on hover */}
            </div>+

            <div className = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-semibold text-lg">
                {/* Text on hover */} 
                <p className = {textClassName}>{text}</p>
            </div>

        </div>
    );

}