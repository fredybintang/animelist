import { CaretLeft, CaretRight } from "@phosphor-icons/react"

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="py-5 flex justify-center items-center gap-4">
            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="p-1 text-white bg-indigo-500 rounded"><CaretLeft size={24} /></button>
            }
            <div className="text-xl">{page} of {lastPage}</div>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="p-1 text-white bg-indigo-500 rounded"><CaretRight size={24} /></button>
            }
        </div>
    )
}

export default Pagination