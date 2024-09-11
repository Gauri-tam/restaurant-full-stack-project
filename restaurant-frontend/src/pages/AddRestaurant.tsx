import { useState } from "react";
import Input from "../component/Input";
import { Form, Link, useNavigate, } from "react-router-dom";
import { restaurantApi } from "../features/api";

const AddRestaurant = () => {

    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState<boolean>();
    const [isDataAdded, setIsDataAdded] = useState<boolean>();

    const [restaurantDetails, setRestaurantDetails] = useState({
        restaurantName: "",
        address: {
            restaurantPincode: "",
            restaurantCity: "",
            restaurantState: "",
        }
    });

    const { restaurantName, address: { restaurantPincode, restaurantCity, restaurantState } } = restaurantDetails;

    const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setRestaurantDetails(prevDetails => {
            if (name in prevDetails) {
                return {
                    ...prevDetails,
                    [name]: value,
                };
            }

            // Handling nested state updates
            return {
                ...prevDetails,
                address: {
                    ...prevDetails.address,
                    [name]: value,
                },
            };
        });
    };

    console.log("restaurantDetails", restaurantDetails);

    // error Message
    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await restaurantApi.post("/add", restaurantDetails)
        setIsDataAdded(true);
        setShowMessage(true);
        console.log("check database!");
    }

    // next page
    if (isDataAdded) {
        navigate('/addManu');
    }

    // previous page
    const getBackToHandler = () => {
        navigate("/");
    }

    return (
        <div className="  py-4 px-4 h-screen flex flex-col items-center">
            {/* {isError && <Error message="You Don't Have Permission to Access This Resource!" />} */}
            <Form className="bg-transparent mt-4 py-4 px-4 drop-shadow-xl rounded " method="POST" onSubmit={onSubmitHandler}>
                <div className='mt-4 px-2'>
                    <img className="mx-auto h-12 w-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Yy39RhuBXjsaUYHqaP_lGAtHnEGBr5oiw&s?color=indigo&shade=600" alt="Login From icon" />
                    <p>If You Don't Have an Account yet That Please <Link to="/restaurantRegister">Register</Link> first</p>
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
                            name="restaurantName"
                            type="text"
                            value={restaurantName}
                            onChange={onInputHandler}
                        />
                    </div>
                    <div>
                        <div className="px-3 ">
                            <p className="text-xl text-gray-900">Adress of Your Restaurant</p>
                        </div>
                        <div>
                            <Input
                                label="Pincode"
                                name="restaurantPincode"
                                type="number"
                                value={restaurantPincode}
                                onChange={onInputHandler}
                            />
                        </div>
                        <div>
                            <Input
                                label="City"
                                name="restaurantCity"
                                type="text"
                                value={restaurantCity}
                                onChange={onInputHandler}
                            />
                        </div>
                        <div>
                            <Input
                                label="State"
                                name="restaurantState"
                                type="text"
                                value={restaurantState}
                                onChange={onInputHandler}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 mt-2 text-sm text-black place-content-center">
                    <p>For Adding Menu Items Please Click On <b>Add</b> Button</p>
                </div>
                <div className="mt-4 place-content-end flex flex-row">
                    <div>
                        {showMessage && <p className='text-sm text-center text-blue-900'>Your login Check Food section!</p>}
                    </div>
                    <button
                        type="button"
                        className="px-4 py-2 text-black rounded mr-1"
                        onClick={getBackToHandler}>Cancel</button>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default AddRestaurant;