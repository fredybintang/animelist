import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import React from 'react'

const Page = async ({ params }) => {
    const { id } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`);
    const animeById = await response.json();
    const anime = animeById.data
    // console.log(animeById.data.images.jpg.large_image_url)

    return (
        <div className='container mx-auto md:px-1 px-4 mb-7 mt-3'>
            <div className='flex md:flex-row flex-col md:items-start items-center justify-center gap-4 py-3 overflow-x-hidden'>
            <div className='rating md:hidden block'>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th className='px-3'>Score</th>
                                <th className='px-3'>Rank</th>
                                <th className='px-3'>Popularity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>{anime.score}</td>
                                <td className='text-center'>{anime.rank}</td>
                                <td className='text-center'>{anime.popularity}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th className='px-4'>favorites</th>
                                <th className='px-4'>Scored By</th>
                                <th className='px-4'>Members</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td className='text-center'>{anime.favorites}</td>
                                <td className='text-center'>{anime.scored_by}</td>
                                <td className='text-center'>{anime.members}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='image-banner'>
                    <Image src={anime.images.jpg.large_image_url} width={350} height={350} />
                </div>
                <div className='details'>
                    <h1 className='font-bold text-xl md:text-left text-center'>{anime.title}</h1>
                    <p className='text-justify'>{anime.synopsis}</p>
                </div>
                <div className='rating md:block hidden'>
                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th className='px-3'>Score</th>
                                <th className='px-3'>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>{anime.score}</td>
                                <td className='text-center'>{anime.rank}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th className='px-4'>favorites</th>
                                <th className='px-4'>Members</th>
                            </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td className='text-center'>{anime.favorites}</td>
                                <td className='text-center'>{anime.members}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th className='px-3'>Popularity</th>
                                <th className='px-4'>Scored By</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center'>{anime.popularity}</td>
                                <td className='text-center'>{anime.scored_by}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.trailer.youtube_id} />
            </div>
        </div>
    )
}

export default Page