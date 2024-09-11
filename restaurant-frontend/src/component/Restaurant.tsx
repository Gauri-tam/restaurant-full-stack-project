import React from "react";
import { useState, useEffect } from "react";
interface RestaurantDetails extends React.HTMLAttributes<HTMLInputElement> {
    image: string,
    name: string,
    address: {
        restaurantCity:string,
        restaurantState:string,
        restaurantPincode:string
    },
    price: number,
}

const Restaurant: React.FC<RestaurantDetails> = ({ image, name, address, price }) => {

    const [random, setRamdom] = useState<number>();
    const [isBestSeller, setBestSeller] = useState<boolean>(false);

    useEffect(() => {
        const number = Math.floor(Math.random() * 10)
        if (number > 3) {
            if (number >= 7) {
                setBestSeller(true)
            }
            setRamdom(number);
        } else {
            setRamdom(4);
        }
    }, [])
    return (
        <>
            <div className="">
                <div className=" h-full p-4 bg-transparen rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={image} className="w-full place-self-center">
                        <img className=" object-cover flex rounded-xl place-items-end" src={image} alt={name} />
                    </a>
                    <div className="">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                        <div className="flex justify-between">
                            <h5 className="mb-2 text-2xl border-1 border-blue-gray-900 font-bold tracking-tight text-gray-900 dark:text-white">{`$${price}`}</h5>
                            {isBestSeller && <p className="w-20 bg-light-blue-700 mt-3 rounded text-white text-center border-1">BestSeller</p>}
                        </div>
                        <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{address.restaurantCity},{address.restaurantState},{address.restaurantPincode}</p>
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

export default Restaurant;