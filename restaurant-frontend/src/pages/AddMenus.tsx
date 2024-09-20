import { Form, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import { useState } from "react";
import { restaurantApi } from "../features/api";
import Error from "../messages/Error";
import GetUserRole from "../features/GetUserRole";
import GeanerateId from "../features/GenerateId";

const AddMenus = () => {

    const navigate = useNavigate();
    const userRole = GetUserRole(); // get role of user
    const menuId = GeanerateId();
    const restId = localStorage.getItem("restaurantId")
    const [isError, setIsError] = useState<boolean>();
    const [showMessage, setShowMessage] = useState<boolean>();
    const [addMenu, setAddMenu] = useState({
        menuItemId: menuId,
        menuItemName: "",
        menuItemPrice: "",
        menuItemDescription: "",
        menuItemImage: "",
        restaurant: {
            restaurantId: restId ? parseInt(restId, 10) : 0
        }
    })

    const { menuItemName, menuItemPrice, menuItemDescription, menuItemImage , restaurant:{ restaurantId }} = addMenu;

    const onChangeHandler = (event: any) => {
        event.preventDefault();
      const {name, value} = event.target;

        
        setAddMenu((prevDetails)=>{
            if (name in prevDetails) {
               return{
                ...prevDetails,
                [name] : value
               }
            }

            return {
                ...prevDetails,
                restaurant: {
                    ...prevDetails.restaurant,
                    [name]: value,
                }
            };
           
        })
    }

    // store your data in database.
    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await restaurantApi.post('/addMenu', addMenu)
            setShowMessage(true)
        } catch (error) {
            setIsError(true)
        }
    }

    const gobackHandler = () => {
        navigate("../..")
    }
    return (
        <>
            {userRole !== "CUSTOMER" ?
                <div className=" bg-transparent py-4 px-4 h-screen flex flex-col items-center">
                    {isError && <Error message="You Don't Have Permission to Access This Resource!" />}
                    <Form className="bg-transparent mt-4 py-4 px-4 rounded bg-gray-400" method="POST" onSubmit={submitHandler}>
                        <div className='mt-4 px-2'>
                            <img className="mx-auto h-12 w-auto rounded-full" src="https://cdn-icons-png.flaticon.com/512/1046/1046747.png?color=indigo&shade=600" alt="Login From icon" />
                            <p>Add Menus One By One!</p>
                        </div>
                        <div>
                            <div>
                                <Input
                                    label="Menu Item Name"
                                    name="menuItemName"
                                    type="text"
                                    value={menuItemName}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div>
                                <Input
                                    label="Menu Item Price"
                                    name="menuItemPrice"
                                    type="number"
                                    value={menuItemPrice}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div>
                                <Input
                                    label="Menu Item Description"
                                    name="menuItemDescription"
                                    type="text"
                                    value={menuItemDescription}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div>
                                <Input
                                    label="Menu Item Image"
                                    name="menuItemImage"
                                    type="text"
                                    value={menuItemImage}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="mt-4 place-content-end flex flex-row">
                                <div>
                                    {showMessage && <p className=' mt-2 mr-8 text-sm text-center text-black'>Your Menu is Added </p>}
                                </div>
                                <button
                                    className="px-4 py-2 text-black rounded mr-1"
                                    type="button" onClick={gobackHandler}>
                                    Back
                                </button>
                                <button
                                    className="text-white bg-opacity-75 bg-black hover:bg-gray-950 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950"
                                    type="submit">
                                    Add Menu
                                </button>
                            </div>
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

export default AddMenus;