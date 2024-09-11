import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
    count: number
}

const Pagination: React.FC<Props> = ({ count }) => {

    // we can use Loding spiner in pagination

    return (
        <>
            <div className="h-full flex flex-row place-content-end">
                <div className="">
                    <button className="px-2 py-2 text-blue-50 text-center bg-blue-500 hover:bg-blue-600" >Pre</button>
                </div>
                <div>
                    <button className="px-2 py-2 text-blue-50 text-center bg-blue-500 hover:bg-blue-600S">Next</button>
                </div>
            </div>
        </>
    )
}

export default Pagination;