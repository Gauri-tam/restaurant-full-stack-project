import { Outlet } from "react-router-dom";
// import Register from "./Register";
// import RestaurantDetails from "./RestaurantDetails";
import AddRestaurant from "./AddRestaurant";
// import { useState } from "react";

const Restaurants = () =>{
    // const [isUsereLogin, setIsUserLogin ] = useState<boolean>();

    // setIsUserLogin(true);

    return(
        <>
        <Outlet />
        <div className="">
            {/* <RestaurantDetails  /> */}
            <AddRestaurant />
            {/* <Register /> */}
        </div>
        </>
    )
}

export default Restaurants;