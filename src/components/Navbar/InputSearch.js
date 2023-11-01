"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        const keyword = searchRef.current.value
        if (!keyword) return
        if (e.key === "Enter" || e.type === "click") {
            e.preventDefault();
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className="relative">
            <input
                placeholder="Search Anime..."
                className="w-full p-1 rounded"
                ref={searchRef}
                onKeyDown={handleSearch} />
            <button className="absolute top-1  end-2 text-gray-400" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch