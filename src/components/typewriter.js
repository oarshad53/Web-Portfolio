'use client';
import { useState, useEffect} from 'react';

export default function Typewriter( { className, children, speed } ) {
    
    const [text, setDisplayedText] = useState("");
    const fullText = typeof children === 'string' ? children : "children was not a string.";

    useEffect(() => {
        if (text.length >= fullText.length) return;

        const timeout = setTimeout(() => {
            setDisplayedText(fullText.slice(0, text.length + 1));
        }, speed || 150);

        return () => clearTimeout(timeout);

    }, [text, fullText, speed]); // This last array here tells React to only re-run the effect if any of these values ever change

    return <h1 className = {className}>
        {text}
        <span className = "animate-blink">|</span>
    </h1>

}