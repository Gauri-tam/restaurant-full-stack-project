import React, { useEffect, useState } from "react";
import Menus from "../component/Menus";
import SearchBar from "../UI/SearchBar";
import Error from "../messages/Error";
import { restaurantApi } from "../features/api";
const RestaurantDetails: React.FC = () => {

    const [isError, setIsError] = useState<boolean>();
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await restaurantApi.get('/getMenus')
                setRestaurants((response).data.content)
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
                setIsError(true)
            } finally {
                setLoading(false)
            }
        }
        getdata()
    }, [])

    // if (request.status === 401) {
    //    return error("This page you were trying to view requires a valid user ID or password to access") 
    // }

    console.log("getMenus", restaurants);

    if (loading) {
        return <div className="text-center text-blue-700">Loading...</div>;
    }
    
    return (
        <>
            <SearchBar />
            <div className="mx-10 my-5">
                {isError && <Error message="You Don't Have Permission to Access This Resource!" />}
                <div className="h-56 grid grid-cols-3 gap-4 content-stretch">
                    {restaurants?.map((menuItem) => (
                        <div key={menuItem.menuItemId} className="col-span-1">
                            <Menus
                                image={menuItem.menuItemImage}
                                name={menuItem.menuItemName}
                                description={menuItem.menuItemDescription}
                                price={menuItem.menuItemPrice}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RestaurantDetails;
