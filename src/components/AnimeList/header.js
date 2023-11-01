import Link from "next/link"

const Header = ({ title, hrefLink }) => {
    return (
        <div className="flex justify-between items-center">
            <h1 className="py-3 font-bold text-xl">{title}</h1>
            {hrefLink ? 
            <Link href={hrefLink} className="text-indigo-500 hover:text-indigo-700 md:text-md text-sm">See all &gt;</Link>
            : null
        }
        </div>
    )
}

export default Header