"use client"

import AllPopuler from "@/components/AnimeList/allList";
import Header from "@/components/AnimeList/header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1)
  const [anime, setAnime] = useState([])

  const fetchData = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()
    setAnime(data)
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container mx-auto">
      <div className="mx-5 py-3">
        <section>
          <Header title="All Anime List" />
          <AllPopuler api={anime} />
          <Pagination page={page} setPage={setPage} lastPage={anime.pagination?.last_visible_page} />
        </section>
      </div>
    </div>
  )
}

export default Page