"use client"
import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const AllList = ({ api, genre }) => {
    return (
        <section>
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
                {api.data?.map(data => {
                    return (
                        <div key={data.mal_id} className="cards shadow-xl">
                            <Link href={`/${genre}/${data.mal_id}`} className="cursor-pointer">
                                <Image src={data.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
                                <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
                                <div className="score-rating px-3 float-right">
                                    <div className="w-16 bg-slate-400  flex items-center p-1 rounded text-white">
                                        <Star size={16} />
                                        <h4 className="ps-2">{data.score}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AllList