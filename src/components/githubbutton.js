import Link from 'next/link'

export default function GitHubButton ( { href, iconPath, alt } ) {

    return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className = "inline-block rounded-full">
                <img src = {iconPath} alt={alt} className="block rounded-full h-12.5 w-12.5 object-cover"></img>
        </Link>
    );

}