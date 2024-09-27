import { Link } from "react-router-dom"
const DropDownDetails = () => {

    // const [isBreakfast, setBreakfast] = useState<any[]>([
    //     {
           
    //     }
    // ]);

    return (
        <div className="flex flex-row gap-40 text-lg mx-52 my-2">
            <div>
                <button id="dateDelayButton" data-dropdown-toggle="dateDelay" data-dropdown-delay="500" data-dropdown-trigger="hover"
                    className="text-black text-opacity-75 bg-gray-500 bg-opacity-45 hover:bg-gray-600 hover:bg-opacity-45 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700"
                    type="button">Date
                    <svg className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="dateDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dateDelayButton">
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">today</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">tomarrow</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">dd-mm-yyyy</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">dd-mm-yyyy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <button id="guestDelayButton" data-dropdown-toggle="guestDelay" data-dropdown-delay="500" data-dropdown-trigger="hover"
                    className="text-black text-opacity-75 bg-gray-500 bg-opacity-45 hover:bg-gray-600 hover:bg-opacity-45  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700"
                    type="button">Guest
                    <svg className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="guestDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="guestDelayButton">
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1 guest</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2 guests</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3 guests</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4 guests</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <button id="lunchDelayButton" data-dropdown-toggle="lunchDelay" data-dropdown-delay="500" data-dropdown-trigger="hover"
                    className="text-black text-opacity-75 bg-gray-500 bg-opacity-45 hover:bg-gray-600 hover:bg-opacity-45  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700"
                    type="button">Lunch
                    <svg className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                <div id="lunchDelay" className="z-5 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="lunchDelayButton">
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Breakfast</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lunch</Link>
                        </li>
                        <li>
                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Diner</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default DropDownDetails;