import { getDetailAnime } from '@/libs/api';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import React from 'react'

const Page = async ({ params }) => {
    const { id } = params
    const response = await getDetailAnime("manga" , `${id}`)
    const manga = response.data
    // console.log(manga)

    return (
        <div className='container mx-auto md:px-1 px-4 mb-7 mt-3'>
            <div className='flex md:flex-row flex-col md:items-start items-center justify-center gap-4 py-3 overflow-x-hidden'>
                <div className='image-banner'>
                    <Image src={manga.images.jpg.large_image_url} width={350} height={350} />
                </div>
                <div className='details'>
                    <h1 className='font-bold text-xl md:text-left text-center'>{manga.title}</h1>
                    <div className='rating md:hidden block my-4'>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th className='px-3 border border-e-1 border-b-0 border-black'>Score</th>
                                    <th className='px-3 border border-e-1 border-b-0 border-black'>Rank</th>
                                    <th className='px-3 border border-e-1 border-b-0 border-black'>Popularity</th>
                                </tr>
                            </thead>
                            <tbody className='border border-t-0 border-black'>
                                <tr>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>{manga.score}</td>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>#{manga.rank}</td>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>#{manga.popularity}</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className='px-4 border border-e-1 border-b-0 border-black'>favorites</th>
                                    <th className='px-4 border border-e-1 border-b-0 border-black'>Scored By</th>
                                    <th className='px-4 border border-e-1 border-b-0 border-black'>Members</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>{manga.favorites}</td>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>{manga.scored_by}</td>
                                    <td className='text-center border border-e-1 border-t-0 border-black'>{manga.members}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className='text-justify'>{manga.synopsis}</p>
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
                                <td className='text-center'>{manga.score}</td>
                                <td className='text-center'>#{manga.rank}</td>
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
                                <td className='text-center'>{manga.favorites}</td>
                                <td className='text-center'>{manga.members}</td>
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
                                <td className='text-center'>#{manga.popularity}</td>
                                <td className='text-center'>{manga.scored_by}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div>
                <VideoPlayer youtubeId={manga.trailer.youtube_id} />
            </div> */}
        </div>
    )
}

export default Page