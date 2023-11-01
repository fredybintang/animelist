import AnimeList from "@/components/AnimeList/allList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse } from "@/app/libs/api";

const Page = async ({ params }) => {
    const { keyword } = params;
    const decodedKeyword = decodeURI(keyword)
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`);
    // const searchAnime = await response.json();
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)

    return (
        <div className="mx-5 py-3">
            <section className="container mx-auto">
                <Header title={`Search for ${decodedKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </div>
    );
};

export default Page;
