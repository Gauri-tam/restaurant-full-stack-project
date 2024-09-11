import { useLocation, useNavigate } from "react-router-dom"
import RestaurantDetails from "./RestaurantDetails";
import { useEffect, useState } from "react";

export default function Header() {

    const navigater = useNavigate();
    const [showRegistration, setShowRegistration] = useState<boolean>(true)
    const routerLocation = useLocation();

    const changeLogo = routerLocation.pathname === "/restaurant/get";

    const onClickedHandle = useEffect(() => {
        setShowRegistration(false)
    }, [])

    function loginHandler() {
        navigater('/login');
    }

    return (
        <>
            <nav className="bg-black h-20 text-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto p-1">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ58ZPjRxrY7ZxO8lXsJeMEhkNB111WOfLlQ&s" className="h-10" alt="Flowbite Logo" />
                        <span className="self-center text-2xl no-underline text-white font-semibold whitespace-nowrap dark:text-white">Restro</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-4">
                        {!changeLogo ? <button
                            type="button"
                            onClick={loginHandler}
                            className="text-white  absolute opacity-75 end-2.5 bg-black hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Login
                        </button> :
                            <button
                                type="button"
                                className="text-white bg-gray-800 absolute opacity-75 end-2.5 hover:bg-gray-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                                Cart
                            </button>}
                    </div>
                    <div className="mt-6 items-center float-right  hidden w-full md:flex md:w-auto md:order-1 " id="navbar-sticky">
                        <ul className=" bg-transparent flex flex-col p-1 md:p-0 font-medium  border-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                    onClick={() => onClickedHandle}
                                    className="block py-2 px-3 text-xl no-underline text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                                </a>
                            </li>
                            <li>
                                <a href="/restaurant/get"
                                    onClick={() => onClickedHandle}
                                    className="block py-2 px-3 text-xl text-gray-300 rounded  no-underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Check Food
                                </a>
                            </li>
                            <li>
                                <a href="/restaurant/add"
                                    onClick={() => onClickedHandle}
                                    className="block py-2 px-3 text-xl text-gray-300 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Add Restaurant
                                </a>
                            </li>
                            <li>
                                <a href="/restaurantRegister"
                                    onClick={() => onClickedHandle}
                                    className="block py-2 px-3 text-xl text-gray-300 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Restaurant SignUp
                                </a>
                            </li>
                            <li>
                                <a href="/customerRegister"
                                    onClick={() => onClickedHandle}
                                    className="block py-2 px-3 text-xl text-gray-300 rounded no-underline hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-200 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Customer SignUp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                {showRegistration && <RestaurantDetails />}
            </div>
        </>
    )
}