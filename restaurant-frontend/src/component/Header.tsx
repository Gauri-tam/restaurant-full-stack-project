import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";
import HeaderDropDown from "./HeaderDropDown";
import UserInfo from "./UserInfo";
import Admin from "./Admin";

export default function Header() {

    const routerLocation = useLocation();

    const showCart = routerLocation.pathname !== "/restaurant/get";

    const showHome = routerLocation.pathname !== "/"

    return (
        <>
            <nav className="sticky bg-black bg-opacity-95 h-16 text-white dark:bg-gray-900 w-full z-20 top-0 start-0 dark:border-gray-600">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto p-1">
                    <a href="/" className="flex items-center space-x-3 mt-2 mr-0 rtl:space-x-reverse ml-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ58ZPjRxrY7ZxO8lXsJeMEhkNB111WOfLlQ&s" className="h-10" alt="Flowbite Logo" />
                        <span className="self-center mt-2 text-2xl no-underline text-white font-semibold  whitespace-nowrap dark:text-white">Restaurant</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="flex mr-3 mt-3 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
                        {showCart ?
                            <>
                                <UserInfo />
                            </>
                            :
                            <>
                                <Link to="/restaurant/get/cart"
                                    // onClick={showOnClickHandler}
                                    className="text-gray-400 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 md:bg-black md:bg-opacity-80 md:text-gray-400 md:p-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                    Cart
                                </Link>
                            </>
                            // cart Item 
                        }
                    </div>
                    <div className="mt-4 flex flex-col items-end md:justify-between  w-full md:block md:w-auto  md:order-1 " id="navbar-sticky">
                        <ul className=" bg-transparent flex flex-col mr-12 p-1 md:p-0 font-medium border-transparent rounded-lg md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                    className="block py-2 px-3 text-lg font-thin no-underline text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                                </a>
                            </li>
                            {showHome &&
                                <li>
                                    <Link to={"/"}
                                        className="text-gray-400 mr-3 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 md:bg-black md:bg-opacity-80 md:text-gray-400 md:p-0 md:dark:text-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                        Home
                                    </Link>
                                </li>
                            }
                            <li>
                                <a href="/restaurant/get"
                                    className="text-gray-400 mr-3 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 md:bg-black md:bg-opacity-80 md:text-gray-400 md:p-0 md:dark:text-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                    Check Food
                                </a>
                            </li>
                            <li>
                                <a href="/customerRegister"
                                    className="text-gray-400 mr-3 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 md:bg-black md:bg-opacity-80 md:text-gray-400 md:p-0 md:dark:text-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                    Resgister
                                </a>
                            </li>
                            <HeaderDropDown />
                            <Admin />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}