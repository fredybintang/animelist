"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const AnimeList = ({ api }) => {
    return (
        <section>
            <Swiper
                spaceBetween={30}
                slidesPerView={4.2}
            >
                <div className="cardList">
                    {api.data.map(data => {
                        return (
                            <SwiperSlide>
                                <div key={data.mal_id} className="cards shadow-xl">
                                    <Link href={`/anime/${data.mal_id}`} className="cursor-pointer">
                                        <Image src={data.images.webp.image_url} alt="..." width={350} height={350} className="w-full max-h-64 object-cover" />
                                        <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </section>
    )
}

export default AnimeList