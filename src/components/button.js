import Link from 'next/link'

export default function Button ( { href, iconPath, alt } ) {

    return (
        <Link href={href} passHref>
            <a className = '' target="_blank" rel="noopener noreferrer">
                <img src = {iconPath} alt={alt} className="h-6 w-6 object-cover"></img>
            </a>
        </Link>
    );

}