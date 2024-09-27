import { useState } from "react";
import Input from "../component/Input";
import { Form, Link, useNavigate, } from "react-router-dom";
import { restaurantApi } from "../features/api";
import GetUserRole from "../features/GetUserRole";
import GeanerateId from "../features/GenerateId";

const AddRestaurant = () => {

    const navigate = useNavigate();
    const restId = GeanerateId();
    const addId = GeanerateId();
    const uId = localStorage.getItem("ownerId")
    const userRole = GetUserRole();
    const [showMessage, setShowMessage] = useState<boolean>();
    const [isDataAdded, setIsDataAdded] = useState<boolean>();

    const [restaurantDetails, setRestaurantDetails] = useState({
        restaurantId: restId,
        restaurantName: "",
        address: {
            addressId: addId,
            restaurantPincode: "",
            restaurantCity: "",
            restaurantState: "",
        },
        user: {
            userId: uId ? parseInt(uId, 10) : 0
        }
    });

    console.log(restaurantDetails);
    // const { restaurantId, restaurantName, address: { addressId, restaurantPincode, restaurantCity, restaurantState }, user:{userId} } = restaurantDetails;
    
    const { restaurantName, address: { restaurantPincode, restaurantCity, restaurantState }, user:{userId} } = restaurantDetails;

    console.log(userId);

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
                user:{
                    ...prevDetails.user,
                    [name]: value,
                }
            };
        });
    };

    console.log("restaurantDetails", restaurantDetails);

    // error Message
    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await restaurantApi.post("/add", restaurantDetails)
            setIsDataAdded(true);
            setShowMessage(true);
            localStorage.setItem("restaurantId", restaurantDetails.restaurantId + "");
            localStorage.setItem("addressId", restaurantDetails.address.addressId + "");
        } catch (error) {
           console.error("Error occured!",error);
        }
    }

    // next page
    if (isDataAdded) {
        navigate('/restaurant/addMenu');
    }

    // previous page
    const getBackToHandler = () => {
        navigate("/");
    }

    return (

        <>
            {userRole !== "CUSTOMER" ?
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
                                {showMessage && <p className='text-sm text-center text-blue-900'>Your Restaurnt is Added to Databse!</p>}
                            </div>
                            <button
                                type="button"
                                className="px-4 py-2 text-black rounded mr-1"
                                onClick={getBackToHandler}>Cancel</button>
                            <button
                                type="submit"
                                className="text-white bg-opacity-75 bg-black hover:bg-gray-950 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950">
                                Add
                            </button>
                        </div>
                    </Form>
                </div>
                :
                <div className="bg-transparent py-4 px-4 h-screen flex flex-col items-center">
                    <h1 className="text-xl font-medium h-4">Sorry!</h1>
                    <p className=" mt-10 text-lg">You Are Not Valid User To Access This Page!</p>
                </div>
            }
        </>
    )
}

export default AddRestaurant;