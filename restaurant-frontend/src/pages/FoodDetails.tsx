import React, { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import Error from "../messages/Error";
import { restaurantApi } from "../features/api";
import MenuItems from "../component/MenuItems";

const FoodDetails: React.FC = () => {

    const [isError, setIsError] = useState<boolean>(false);
    const [foods, setfoods] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await restaurantApi.get("/getMenus");
                console.log("Response received:", response);

                if (response.data && response.data.content) {
                    setfoods(response.data.content);
                } else {
                    console.error("Unexpected response structure:", response.data);
                }
            } catch (error: any) {
                if (error.response) {
                    console.error("Server responded with error:", error.response.data);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error setting up the request:", error.message);
                }
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        getdata();
    }, []);

    if (loading) {
        return <div className="text-center text-black">Loading...</div>;
    }

    return (
        <>
            <div className=" bg-white justify-items-start">
                <SearchBar placeholder="Food" />
            </div>
            <div className=" w-full h-full flex items-center justify-center bg-white">
                <div className="mx-10 my-5 justify-between">
                    {isError && <Error message="You Don't Have Permission to Access This Resource!" />}
                    <div className="mx-60 my-5 place-items-center grid grid-cols-3 gap-3 content-stretch">
                        <MenuItems menuData={foods} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodDetails;
