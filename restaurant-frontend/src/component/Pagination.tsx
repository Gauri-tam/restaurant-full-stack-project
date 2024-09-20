interface PaginationProps {
    totalPages: number;
    currentPage: number ;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()]; 

    return (
        <div className="flex justify-center my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
                className="px-4 py-2 mx-1 border-1 text-gray-950 hover:bg-gray-500 border-gray-500 rounded disabled:opacity-50"
            >
                Previous
            </button>
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 mx-1 ${currentPage === number ? 'rounded-lg bg-gray-500 text-gray-800' : 'bg-gray-300'}`}
                >
                    {number + 1}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 mx-1 border-gray-400 hover:bg-gray-500 rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
