'use client';
{/* Huge Headache of a Component, Do Not Use*/}
import { useState } from 'react';

export default function DropdownButton ({ className, children }) {

    const [isActive, setActive] = useState(false);

    const orientationChanger = (() =>
        setActive(!isActive)
    )

    return (
        <div>
            <button onClick = { orientationChanger } className={`w-10 h-10 rounded-full hover:bg-gray-300 flex items-center justify-center ${className}`}>
                <img src = "/icons/dropdown.svg"
                className = {`max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 ${isActive ? "rotate-360" : "rotate-270 ml-1"}`}/>
            </button>

            {isActive ? (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg shadow-md">
                <ul className = "list-disc pl-5">
                    {children.map((course, index) => {
                        return <li className = "font-outfit text-lg" key={index}>{course}</li>
                    })}
                </ul>
            </div>
            ) : <span></span>}
        </div>
    )
}