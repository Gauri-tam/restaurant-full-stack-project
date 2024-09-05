import React from "react";
import { } from '../images/mac-and-cheese.jpg'


interface MenuDetails extends React.HTMLAttributes<HTMLInputElement> {
    image: string,
    name: string,
    description: string,
    price: number,
}

const Menus: React.FC<MenuDetails> = ({ image, name, description, price }) => {

    return (
        <>
            {/* <div>
                <img className="rounded" src={image} alt={name} />
                <div className="mt-2">
                    <div>
                        <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{description}</div>
                        <div className="font-bold text-slate-700 leading-snug">
                            <a href="url" className="hover:underline">{name}</a>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{ price }</div>
                </div>
            </div>
        </div > */}

            <div className="">
                <div className=" max-w-sm p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={image}>
                        <img className="rounded-t-lg text-justify" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SsIEH7hh6hMbEtRZGLZnzsZMFsjBmCefnQ&s' alt={name} />
                    </a>
                    <div className="p-5">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`$${price}`}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menus;