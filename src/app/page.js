import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "./libs/api";

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const populer = await response.json()
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`)
  const manga = await response2.json()

  return (
    <div className="container mx-auto">
      <div className="mx-5 py-3">
        <section>
          <Header title="Populer" hrefLink="/populer" />
          <AnimeList api={topAnime} />
          <Header title="Manga" hrefLink="/manga" />
          <AnimeList api={manga} />
        </section>
      </div>
    </div>
  )
}

export default Page