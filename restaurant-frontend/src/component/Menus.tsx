import React, { useEffect, useState } from "react";

interface MenuDetails extends React.HTMLAttributes<HTMLInputElement> {
    image: string,
    name: string,
    description: string,
    price: number,
}

const Menus: React.FC<MenuDetails> = ({ image, name, description, price }) => {

    const [random, setRamdom] = useState<number>();
    const [isBestSeller, setBestSeller] = useState<boolean>(false);

    useEffect(() => {
        const number = Math.floor(Math.random() * (10 - 4)) + 4;

        if (number >= 7) {
            setBestSeller(true)
        }

        setRamdom(number);
    }, [])

    return (
        <>
            <div className="">
                <div className=" h-full p-4 bg-transparen rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="select-none object-cover w-full h-52 flex rounded-xl place-items-end" src={image} alt={name} />
                    <div className="">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                        <div className="flex justify-between">
                            <h5 className="mb-2 text-2xl border-1 border-blue-gray-900 font-bold tracking-tight text-gray-900 dark:text-white">{`$${price}`}</h5>
                            {isBestSeller && <p className="w-20 mt-2 mb-2 rounded text-white border-1 bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm p-2 me-2  ">BestSeller</p>}
                        </div>
                        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{description}</p>
                        <div className="flex justify-between">
                            <button type="button" className="bg-opacity-75 text-white bg-black hover:bg-gray-900 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950">
                                <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                                Add to Cart
                            </button>
                            <p className="bg-black bg-opacity-75  text-white text-sm font-semibold inline-flex items-center p-2 rounded">{random}/10</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menus;