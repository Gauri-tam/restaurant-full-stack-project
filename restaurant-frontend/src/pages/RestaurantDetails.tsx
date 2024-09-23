import React, { useEffect, useState } from "react";
import SearchBar from "../component/SearchBar";
import Error from "../messages/Error";
import { restaurantApi } from "../features/api";
import RestaurantList from "../component/RestaurantList";

const RestaurantDetails: React.FC = () => {

    const [isError, setIsError] = useState<boolean>(false);
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // https://png.pngtree.com/background/20231031/original/pngtree-3d-render-of-the-interior-of-a-cozy-cafe-restaurant-picture-image_5812445.jpg  
   
    useEffect(() => { 
        const getdata = async () => {
            try {
                const response = await restaurantApi.get("/get");  // get the restaurant and address from database
                console.log("Response received:", response);

                if (response.data && response.data.content) {
                    setRestaurants(response.data.content);
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
    }//mx-60 my-5

    return (
        <>
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header or any other top content */}
            <div className="justify-items-start">
                <SearchBar placeholder="Restaurant" />
            </div>
    
            {/* Main content area */}
            <div className="flex-grow flex items-center justify-center bg-white">
                <div className=" mx-10 my-5 justify-between  h-full">
                    {isError && <Error message="You Don't Have Permission to Access This Resource!" />}
                    <div className="grid grid-cols-3 gap-3 content-stretch place-items-center">
                        <RestaurantList restaurantData={restaurants} />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default RestaurantDetails;
