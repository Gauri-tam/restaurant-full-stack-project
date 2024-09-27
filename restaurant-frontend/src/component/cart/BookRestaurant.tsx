// import React, { useState } from "react";

import CartImageSlider from "./CartImageSlider";
import { RestaurantTime } from "./DateTime";
import DropDownDetails from "./DropDownDetails";


const BookRestaurant = () => {
    const isOpen = RestaurantTime();

    return (
        <div className="m-0 flex justify-center bg-white min-h-screen">
            <div className="m-1 justify-center w-3/5 min-h-full ">
                <div className="flex flex-col text-lg rounded-lg mx-52 my-1">
                    <div>
                        <CartImageSlider />
                    </div>
                    <h1 className="text-xl font-light">Name of the item</h1>
                    <p className="text-xl font-light">Description</p>
                    <div className="text-sm">
                        {/* <span className="text-green-700">Open</span>  */}
                        {isOpen ? <span className="text-green-500">Open</span> : <span className="text-red-500">Colse</span>}
                    </div>
                </div>
                <div className="flex flex-row justify-evenly text-lg border-b-2 border-black border-opacity-25 mx-52 p-2 my-3" >
                    <div className="hover:bg-gray-400 hover:rounded-md text-xl font-light p-1">
                        Overlook
                    </div>
                    <div className="hover:bg-gray-400 hover:rounded-md text-xl font-light p-1">
                        Menus
                    </div>
                    <div className="hover:bg-gray-400 hover:rounded-md text-xl font-light p-1">
                        Rating
                    </div>
                    <div className="hover:bg-gray-400 hover:rounded-md text-xl font-light p-1">
                        Photos
                    </div>
                </div>
                <div className="flex flex-col justify-evenly text-lg  mx-52 my-1 ">
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Select Booking Details</h1>
                        <div className="flex justify-center gap-6">
                            <DropDownDetails />
                        </div>
                    </div>
                    <div className="border-t-2 text-xl font-semibold border-black border-opacity-25">
                        <h1 className="my-4">Selected Slot</h1>
                        <div className="flex flex-row mb-2 text-black text-sm">
                        <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                            <p className="border-2 mx-2 px-2 py-1 border-b-2 border-black border-opacity-10 rounded-lg">10:30&nbsp;AM <span className="text-xs text-blue-800">2&nbsp;Offer</span></p>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row text-lg border-t-2 border-black border-opacity-25 mx-52 my-1">
                    <h1 className="text-xl font-semibold">Choose an Offer</h1>
                    <div>
                        <div className=" border-4 border-indigo-700 w-1/5">

                        </div>
                        <div>

                        </div>
                    </div>
                </div> */}
                <div className="flex flex-row text-lg text-center mx-52 my-2 py-2 bg-gray-500 rounded-lg">
                    <button className="border-black border-opacity-25 w-full flex items-center justify-center">
                        Proceed to Book
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookRestaurant;