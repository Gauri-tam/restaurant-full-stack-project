interface Props extends React.HTMLAttributes<HTMLInputElement>{
cardName: string
}

const SearchItemCard: React.FC<Props> = ({ cardName, children}) => {
    return (
        <div className="mt-10 mx-60 overflow-x-auto bg-opacity-0 ">
            <h1 className="p-4 rounded-lg font-medium text-black text-2xl text-opacity-65 border-gray-700/45 bg-gray-600 bg-opacity-45 flex-auto border w-full border-black">
                Your {cardName}
            </h1>
            <div className="overflow-x-hidden">
                <div className="mx-10 my-5 grid grid-cols-4 gap-3 place-items-center content-stretch">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default SearchItemCard;