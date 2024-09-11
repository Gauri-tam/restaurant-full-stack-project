import React from "react";
import Restaurant from "./Restaurant";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    restaurantData: any
}

const RestaurantList: React.FC<Props> = ({ restaurantData }) => {
    console.log("restaurantData", restaurantData);

    return (
        <>
            {
                Array.isArray(restaurantData) && restaurantData.map((restaurant) => (
                    <div key={restaurant.restaurantId} className="mt-10 ml-5 bg-white rounded-lg shadow-lg flex flex-col place-content-center">
                        <Restaurant image="https://png.pngtree.com/background/20231031/original/pngtree-3d-render-of-the-interior-of-a-cozy-cafe-restaurant-picture-image_5812445.jpg"
                            name={restaurant.restaurantName}
                            address={restaurant.address}
                            price={200}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default RestaurantList;