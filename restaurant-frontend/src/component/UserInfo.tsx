import { useState } from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hs-dropdown relative inline-flex">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-gray-400 bg-black bg-opacity-80  focus:bg-gray-900 hover:bg-gray-900 md:bg-black md:bg-opacity-80 md:text-gray-400 md:p-0 focus:outline-none font-medium rounded-full text-sm text-center inline-flex items-center"
                type="button"
            >
                <img src="https://www.svgfind.com/show/10913066.svg" className="bg-white rounded-full h-11 w-11" alt="user-information" />
            </button>
            {isOpen && (
                <div id="dropdown" className="absolute right-0 mt-2 z-10 bg-opacity-75 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-200 dark:text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/customerRegister">
                                SignUp
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/logout">
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UserInfo;