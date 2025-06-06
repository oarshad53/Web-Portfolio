export default function HoverButton ( { iconPath, text, textClassName, className } ) {

    return (
        <div className = {`w-50 h-30 rounded-xl bg-white/30 backdrop-blur-md shadow-md flex items-center justify-center group hover:scale-105 transition duration-300 ${className}`}>

            <img src={iconPath} className="max-w-[75%] max-h-[75%] object-contain" alt={text}></img>

            <div className = "absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl bg-white/40">
                {/* Blur on hover */}
            </div>

            <div className = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-white font-semibold text-lg">
                {/* Text on hover */} 
                <p className = {textClassName}>{text}</p>
            </div>

        </div>
    );

}
