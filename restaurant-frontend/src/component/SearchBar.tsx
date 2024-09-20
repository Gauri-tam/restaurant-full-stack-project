import React, { useEffect, useState } from "react";
import { restaurantApi } from "../features/api"
import MenuItems from "./MenuItems"
import RestaurantList from "./RestaurantList";
import SearchItemCard from "./SearchItemCard";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    placeholder: string
}

const SearchBar: React.FC<Props> = ({ placeholder }) => {

    const [getData, setGetData] = useState<any[]>([]);
    const [inputItem, setInputItem] = useState<string>("");
    const [isFoodSection, setFoodSection] = useState<boolean>(false);
    const [getInputValue, setGetInputValue] = useState<boolean>(false);

    const findByNameHandler = async (item: string) => {  // Foods || Restaurant ;
        try {
            if (placeholder === "Restaurant") {
                const response = await restaurantApi.get(`/restaurantName?name=${item}`)
                if (response.data.content.empty === true) {
                    <div>Not Available this Item</div>
                }

                if (response.status === 200) {
                    setGetInputValue(true);
                    setGetData(response.data.content)
                } else {
                    console.error("Error: Unexpected response status", response.status);
                }

            } else if (placeholder === "Food") {
                const response = await restaurantApi.get(`/manuItemName?menuName=${item}`)
                setFoodSection(true)
                if (response.status === 200) {
                    setGetInputValue(true);
                    setGetData(response.data.content)
                } else {
                    console.error("Error: Unexpected response status", response.status);
                }
            }

        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        if (inputItem.trim() !== "") {
            findByNameHandler(inputItem);
        } else {
            setGetInputValue(false)
        }
    }, [inputItem])

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputItem(event.target.value);
    }

    return (
        <>
            <div>
                <form className="border-4 border-white bg-white max-w-md mx-auto bg-opacity-0">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">
                        Search
                    </label>
                    <div className="relative bg-opacity-0">
                        <div className=" ml-1 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none bg-opacity-0">
                            <svg className="w-4 h-4 text-black dark:text-black"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            className=" bg-opacity-0 py-4 px-4 block w-full p-4 ps-10 text-sm text-black border border-black rounded-lg bg-transparent focus:ring-black focus:border-gray-800 dark:bg-gray-950 dark:border-gray-950 dark:placeholder-black dark:text-black dark:focus:ring-gray-800 dark:focus:border-gray-900"
                            placeholder={"Search " + placeholder + "..."}
                            autoComplete="off"
                            onChange={changeHandler}
                            required />
                    </div>
                </form>
            </div>
            {getInputValue &&
                (
                    <SearchItemCard cardName={placeholder} >
                        {
                            isFoodSection ?
                                <MenuItems menuData={getData} />
                                :
                                <RestaurantList restaurantData={getData} />
                        }
                    </SearchItemCard >
                )
            }
        </>
    )
}

export default SearchBar; 