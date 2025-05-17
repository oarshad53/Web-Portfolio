export default function Tag( { children, bgClassName, textClassName } ) {
    
    return (
        <div className = {`inline-block px-4.5 py-0.4 ${bgClassName}`}>

            <p className = {`text-sm font-outfit font-bold ${textClassName}`}>{children}</p>

        </div>
    );

}