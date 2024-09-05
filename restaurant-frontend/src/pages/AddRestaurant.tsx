import { useState } from "react";
import Input from "../component/Input";
import { Form, Link, redirect, } from "react-router-dom";
import axios from "axios";
import { restaurantApi } from "../features/api";

const AddRestaurant = () => {

    const [restaurantDetails, setRestaurantDetails] = useState({
        restaurantName: "",
        address: {
            restaurantPincode: "",
            restaurantCity: "",
            restaurantState: "",
        },
        menus: [
            {
                menuItemName: "",
                menuItemPrice: "",
                menuItemDescription: "",
                menuItemImage: ""
            }
        ]
    });

    const token = localStorage.getItem("token"); //headers: { Authorization:localStorage.getItem('jwtToken') }

    // const config = {
    //     headers: { "Authorization": `Bearer ${token}` }
    // };

    const { restaurantName, address: { restaurantPincode, restaurantCity, restaurantState } } = restaurantDetails;

    const addRestaurant = (event: any) => {
        setRestaurantDetails({
            ...restaurantDetails,
            [event.target.name]: event.target.value,
        })
    }

    const onStbmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        restaurantApi.get('/get')
       
    }

    const getBackToHandler = () => {
        redirect("..");
    }

    const gotoMenuItemHandler = () =>{
        redirect("/addMenu") // go to the AddMenu Page
    }

    return (
        <div className="py-4 px-4 h-screen flex flex-col items-center">
            <Form className="mt-4 py-4 px-4 border border-current rounded bg-gray-400" method="post" onSubmit={onStbmitHandler}>
                <div className='mt-4 px-2'>
                    <img className="mx-auto h-12 w-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Yy39RhuBXjsaUYHqaP_lGAtHnEGBr5oiw&s?color=indigo&shade=600" alt="Login From icon" />
                    <p>If You Don't Have an Account yet That Please <Link to="/register">Register</Link> first</p>
                </div>
                <div className="mt-4">
                    <div className="mt-2">
                        <p className="text-center text-black">
                            Add Your Restaurant Information Details below.
                        </p>
                    </div>
                    <div>
                        <Input
                            label="Restaurant Name"
                            className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                            name="restaurantName"
                            type="text"
                            value={restaurantName}
                            onChange={(e) => { addRestaurant(e) }}
                        />
                    </div>
                    <div>
                        <div className="px-3 ">
                            <p className="text-xl text-gray-900">Adress of Your Restaurant</p>
                        </div>
                        <div>
                            <Input
                                label="Pincode"
                                className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                                name="restaurantPincode"
                                type="number"
                                value={restaurantPincode}
                                onChange={(e) => { addRestaurant(e) }}
                            />
                        </div>
                        <div>
                            <Input
                                label="City"
                                className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                                name="restaurantCity"
                                type="text"
                                value={restaurantCity}
                                onChange={(e) => { addRestaurant(e) }}
                            />
                        </div>
                        <div>
                            <Input
                                label="State"
                                className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                                name="restaurantState"
                                type="text"
                                value={restaurantState}
                                onChange={(e) => { addRestaurant(e) }}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 place-content-end flex flex-row">
                    <button className="px-4 py-2 bg-blue-600 text-blue-50 hover:bg-blue-700 rounded mr-1" type="button" onClick={getBackToHandler}>Cancel</button>
                    <button className="px-4 py-2 bg-blue-600 text-blue-50 hover:bg-blue-700 rounded" type="button" onClick={gotoMenuItemHandler}>Add Menus</button>
                </div>
            </Form>
        </div>


    );
}

export default AddRestaurant;