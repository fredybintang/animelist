import Image from "next/image"
import notFound from "../../public/not-found.png"
import Link from "next/link"

const Page = () => {
    return (
        <div className="notFound mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <Image src={notFound} width={270} height={270} />
                <h1 className="text-xl font-bold">PAGE NOT FOUND</h1>
                <Link href="/" className="text-md text-white mt-4 p-1 px-4 hover:bg-indigo-700 bg-indigo-500 rounded-lg">Back</Link>
            </div>
        </div>
    )
}

export default Page