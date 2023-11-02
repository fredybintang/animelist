import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const populer = await response.json()

  return (
    <div className="mx-5 py-3">
      <section>
        <Header title="Anime" hrefLink="/all-anime" />
        <AnimeList api={populer} />
      </section>
    </div>
  )
}

export default Page