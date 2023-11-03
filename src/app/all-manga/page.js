"use client"

import AllList from "@/components/AnimeList/allList";
import Header from "@/components/AnimeList/header";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1)
  const [manga, setManga] = useState([])

  const fetchData = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?page=${page}`)
    const data = await response.json()
    setManga(data)
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container mx-auto">
      <div className="mx-5 py-3">
        <section>
          <Header title="All Manga List" />
          <AllList api={manga} genre="manga" />
          <Pagination page={page} setPage={setPage} lastPage={manga.pagination?.last_visible_page} />
        </section>
      </div>
    </div>
  )
}

export default Page