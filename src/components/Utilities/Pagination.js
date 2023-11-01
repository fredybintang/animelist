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
                <button onClick={handlePrevPage}>Prev</button>
            }
            <div>{page} of {lastPage}</div>
            {page >= lastPage ? null :
                <button onClick={handleNextPage}>Next</button>
            }
        </div>
    )
}

export default Pagination