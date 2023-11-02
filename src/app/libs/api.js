export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getDetailAnime = async(resource, id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}/${id}`)
    const detail = await response.json()
    return detail
}

// export const getMangaResponse = async(resource, query) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
//     const manga = await response.json()
//     return manga
// }