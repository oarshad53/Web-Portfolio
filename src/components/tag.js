export default function Tag( { children, bgClassName, textClassName } ) {
    
    return (
        <div className = {`inline-block px-4.5 py-0.4 ${bgClassName}`} style={{ backgroundColor: 'rgba(37, 99, 235, 0.9)' }}>

            <p className = {`text-sm font-outfit font-bold ${textClassName}`}>{children}</p>

        </div>
    );

}