import FoodDetails from "./FoodDetails";
import { useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

const Restaurants = () => {

    const [isDelivery, setDelivery] = useState<boolean>();


    if (isDelivery) {
        console.log("food");
        
    }
    else{
        console.log("restro");
        
    }
    console.log("isDelivery" , isDelivery );

    return (
        <>
            <div className=" bg-white border-4 justify-items-start flex flex-row justify-center ">
                <button
                    type="button"
                    onClick={()=>setDelivery(false)}
                    className="font-medium mx-2 border-black px-8 py-4 bg-gray-100 hover:bg-gray-400 bg-opacity-80 rounded-md" >
                    Dining Out
                </button>
                <button
                    type="button"
                    onClick={()=>setDelivery(true)}
                    className="font-medium mx-2 border-black px-8 py-4 bg-gray-100 hover:bg-gray-400 bg-opacity-80 rounded-md">
                    Delivery
                </button>
            </div>
            <div className="">
                {isDelivery ? <FoodDetails /> : <RestaurantDetails />}
            </div>
        </>
    )
}

export default Restaurants;