import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hs-dropdown mr-3 relative inline-flex">
            <button
                id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
                className="text-gray-400 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
            >
                Restaurant <MdNavigateNext/>
            </button>
            {isOpen && (
                <div id="dropdown" className="absolute right-0 mt-12 z-10 bg-opacity-75 bg-gray-800 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-200 dark:text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/restaurantRegister">
                                Restaurant Register
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/restaurant/add">
                                Add Restaurant
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center text-white gap-x-3.5 py-2 px-3 text-sm  hover:bg-gray-700 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700 focus:bg-opacity-75"
                                to="/restaurant/addMenu">
                                Add Menu Items
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HeaderDropDown;
