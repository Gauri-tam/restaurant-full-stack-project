import React from "react";

interface RestaurantDetails extends React.HTMLAttributes<HTMLInputElement> {
    name: string,
}

const Restaurant: React.FC<RestaurantDetails> = ({ name, children }) => {
    return (
        <div className="p-4 max-w-xll mx-auto mt-16">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-400">
                    <h1 className="text-lg font-bold">{name}</h1>
                    {/* <span className="text-gray-600">(3 items)</span> */}
                </div>
                <div className="grid grid-cols-3 gap-4 content-stretch">
                    {children}
                </div>

            </div>
        </div>
    )
}

export default Restaurant;