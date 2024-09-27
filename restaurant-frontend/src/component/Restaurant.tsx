import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    image: string,
    name: string,
    address: {
        restaurantCity: string,
        restaurantState: string,
        restaurantPincode: string
    },
    price: number,
}

const Restaurant: React.FC<Props> = ({ image, name, address, price }) => {

    const [random, setRandom] = useState<number>();
    const [isBestSeller, setBestSeller] = useState<boolean>(false);

    useEffect(() => {
        const number = Math.floor(Math.random() * (10 - 4)) + 4;
        if (number >= 7) {
            setBestSeller(true);
        }
        setRandom(number);
    }, []);

    return (
        <>
            <Link to="/bookPlace">
                <div className=" w-full h-full p-4 bg-transparen rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="select-none object-cover w-full h-52 flex rounded-xl place-items-end" src={image} alt={name} />
                    <div className="flex justify-between p-2">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                        <p className="px-1 py-0 bg-black bg-opacity-65 text-white text-sm font-semibold inline-flex items-center rounded">{random}/10 <span className="ml-1">{<FaStar size="10" />}</span></p>
                    </div>
                    <div className="flex justify-between">
                        <h5 className="mb-2 text-2xl border-1 border-blue-gray-900 font-bold tracking-tight text-gray-900 dark:text-white">{`$${price}`}</h5>
                        {isBestSeller && <p className="w-20 bg-light-blue-700 mt-3 rounded text-white text-center border-1">BestSeller</p>}
                    </div>
                    <div className="flex justify-start mb-2 ">
                        <span className="mt-1.5">{<IoLocationSharp size="13" />}</span>
                        <p className="font-normal text-gray-900 dark:text-gray-400">{address.restaurantCity}, {address.restaurantState}, {address.restaurantPincode}</p>
                    </div>
                    <div className="flex justify-between">
                    </div>
                </div>
            </Link>

        </>
    )
}

export default Restaurant;