import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface MenuDetails {
    image: string;
    id: number;
    name: string;
    description: string;
    price: number;
}

const Menus: React.FC<MenuDetails> = ({ id, image, name, description, price }) => {
    const [random, setRandom] = useState<number>();
    const [isBestSeller, setBestSeller] = useState<boolean>(false);

    useEffect(() => {
        const number = Math.floor(Math.random() * (10 - 4)) + 4;
        if (number >= 7) {
            setBestSeller(true);
        }
        setRandom(number);
    }, []);

    const addToCartHandler = (menuId: number) => {

        // if its present already
        const existingCart = localStorage.getItem("cartItems");

        const cartItems = existingCart ? JSON.parse(existingCart) : [];

        const itemInCart = cartItems.find((item: MenuDetails) => item.id === menuId);

        // adding item in cart
        if (!itemInCart) {
            const newItem = { id, name, price };
            const updatedCart = [...cartItems, newItem];

            localStorage.setItem("cartItems", JSON.stringify(updatedCart));

            alert(`${name} has been added to the cart!`); // if we conform than we can add the data 
        } else {
            alert(`${name} is already in the cart!`);
        }
    };

    return (
        <>
            <div className="h-full p-4 bg-transparent rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="select-none object-cover w-full h-52 flex rounded-xl place-items-end" src={image} alt={name} />
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                <div className="flex justify-between">
                    <h5 className="mb-2 text-2xl border-1 border-blue-gray-900 font-bold tracking-tight text-gray-900 dark:text-white">{`$${price}`}</h5>
                    {isBestSeller &&
                        <p
                            className="w-20 mt-2 mb-2 rounded text-white border-1 bg-gradient-to-l from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium text-sm p-2 me-2">
                            BestSeller
                        </p>}
                </div>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">{description}</p>
                <div className="flex justify-between">
                    <button
                        onClick={() => addToCartHandler(id)}
                        type="button"
                        className="bg-opacity-75 text-white bg-black hover:bg-gray-900 focus:ring-3 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950"
                    >
                        Add to Cart
                    </button>
                    <p className="bg-black bg-opacity-75 text-white text-sm font-semibold inline-flex items-center p-2 rounded">{random}/10 <span className="ml-1">{<FaStar size="10" />}</span></p>
                </div>
            </div>
        </>
    );
};

export default Menus;
