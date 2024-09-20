import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Admin = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="hs-dropdown relative inline-flex">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-gray-400 bg-black bg-opacity-80 px-4 py-2 focus:bg-gray-900 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center"
                type="button"
            >Admin <MdOutlineNavigateNext  />
            
            </button>
            {isOpen && (
                <div id="dropdown" className="absolute left-0 mt-12 z-10 bg-opacity-75 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-200 dark:text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3  text-sm hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/data/userData">
                                User Data
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/data/restaurantData">
                                Restaurant Data
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/data/menuData">
                                Menus Data
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Admin;