import InputSearch from "./InputSearch"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="bg-indigo-500">
            <div className="container mx-auto">
                <header className="navbar flex md:flex-row flex-col justify-between p-4 px-5">
                    <Link href={`/`} className="font-bold text-xl text-white">Stars</Link>
                    <InputSearch />
                </header>
            </div>
        </nav>
    )
}

export default Navbar