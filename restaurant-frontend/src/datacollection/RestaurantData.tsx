import { useState, useEffect } from "react";
import Error from "../messages/Error";
import { restaurantApi } from "../features/api";
import Restaurant from "./Restaurant";

const RestaurantData = () => {

    const [restaurantData, setRestaurantData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            
            try {
                const response = await restaurantApi.get("/get")
                console.log("Response received:", response.data.content);

                if (response.status === 200) {
                    setRestaurantData(response.data.content);
                }
            } catch (error) {
                <div><Error message="Not Able to get Data!" /></div>
            }
        }
        getData();
    }, [])

    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="flex place-items-center w-2/4 justify-center gap-4">
                    <ul className=" border-2 border-black w-full p-1">
                        <li className="mt-0 bg-black bg-opacity-30 border border-black p-4 rounded gap-1">
                            <div >
                                <p className="text-black font-medium text-xl">All Restaurant Data</p>
                            </div>
                        </li>
                        {Array.isArray(restaurantData) && restaurantData.map((restaurantInfo: any) => (
                            <li className="border border-black p-4 rounded gap-1" key={restaurantInfo.restaurantId}>
                                {
                                    <Restaurant
                                        restaurantId={restaurantInfo.restaurantId}
                                        restaurantName={restaurantInfo.restaurantName}
                                        menus={restaurantInfo.menus}
                                    />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantData;