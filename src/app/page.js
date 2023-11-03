import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const populer = await response.json()

  // Anime
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  // recommendedAnime = { data: recommendedAnime.slice(0, 8) }
  recommendedAnime = reproduce(recommendedAnime, 8)
  console.log(recommendedAnime)

  // Manga
  const manga = await getAnimeResponse("top/manga", "limit=8")
  let recommendedManga = await getNestedAnimeResponse("recommendations/manga", "entry")
  recommendedManga = reproduce(recommendedManga, 8)
  
  return (
    <div className="container mx-auto">
      <div className="mx-5 py-3">
        <section>
          <Header title="Anime Recommendations" />
          <AnimeList api={recommendedAnime} genre="anime" />
          <Header title="Anime" hrefLink="/all-anime" />
          <AnimeList api={topAnime} genre="anime" />
          <Header title="Manga Recommendations" />
          <AnimeList api={recommendedManga} genre="manga" />
          <Header title="Manga" hrefLink="/all-manga"/>
          <AnimeList api={manga} genre="manga" />
        </section>
      </div>
    </div>
  )
}

export default Page