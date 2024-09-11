import { Form, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import { useState } from "react";
import { restaurantApi } from "../features/api";
import Error from "../messages/Error";

const AddMenus = () => {

    const navigate = useNavigate();
    // const [addMenuData, setAddMenuData] = useState<boolean>();
    const [isError, setIsError] = useState<boolean>();
    const [showMessage, setShowMessage] = useState<boolean>();
    const [addMenu, setAddMenu] = useState({
        menuItemName: "",
        menuItemPrice: "",
        menuItemDescription: "",
        menuItemImage: ""
    })

    const { menuItemName, menuItemPrice, menuItemDescription, menuItemImage } = addMenu;

    const onChangeHandler = (event: any) => {
        event.preventDefault();
        setAddMenu({
            ...addMenu,
            [event.target.name]: event.target.value,
        })
    }

    // store your data in database.
    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            await restaurantApi.post('/addMenu', addMenu)
            setShowMessage(true)
            console.log("menu Added!");

        } catch (error) {
            console.error("an Error Occured!", error)
            setIsError(true)
        }
    }

    const gobackHandler = () => {
        navigate("..")
    }
    return (
        <div className="py-4 px-4 h-screen flex flex-col items-center">
            {isError && <Error message="You Don't Have Permission to Access This Resource!" />}
            <Form className="mt-4 py-4 px-4 border border-current rounded bg-gray-400" method="POST" onSubmit={submitHandler}>
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
                            {showMessage && <p className='text-sm text-center text-blue-900'>Your Menu is Added </p>}
                        </div>
                        <button
                            className="px-4 py-2 text-black rounded mr-1"
                            type="button" onClick={gobackHandler}>
                            Back
                        </button>
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="submit">
                            Add Menu
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default AddMenus;