import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getDetailAnime } from "./libs/api";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const populer = await response.json()
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const manga = await getAnimeResponse("top/manga", "limit=8")
  
  return (
    <div className="container mx-auto">
      <div className="mx-5 py-3">
        <section>
          <Header title="Anime" hrefLink="/all-anime" />
          <AnimeList api={topAnime} genre="anime" />
          <Header title="Manga" hrefLink="/all-manga" />
          <AnimeList api={manga} genre="manga" />
        </section>
      </div>
    </div>
  )
}

export default Page