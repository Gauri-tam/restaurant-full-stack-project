import { Form, redirect } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";

const AddMenus = () => {

    const [addMenu, setAddMenu] = useState({
        menuItemName:"",
        menuItemPrice:"",
        menuItemDescription:"",
        menuItemImage:""
    })

    const {menuItemName, menuItemPrice, menuItemDescription, menuItemImage} = addMenu;

    const onChangeHandler = (event: any) =>{
        event.preventDefault();
      setAddMenu({
        ...addMenu,
        [event.target.name]: event.target.value,
      })
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
     // store your data in database.
    }

    const gobackHandler = () => {
       redirect("..")
    }
    return (
        <div className="py-4 px-4 h-screen flex flex-col items-center">
            <Form className="mt-4 py-4 px-4 border border-current rounded bg-gray-400" method="post" onSubmit={submitHandler}>
            <div className='mt-4 px-2'>
                    <img className="mx-auto h-12 w-auto rounded-full" src="https://cdn-icons-png.flaticon.com/512/1046/1046747.png?color=indigo&shade=600" alt="Login From icon" />
                    <p>Add Menus One By One!</p>
                </div>
                <div>
                    <div>
                        <Input label="Menu Item Name"
                        className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2" 
                        name="menuItemName" 
                        type="text" 
                        value={menuItemName} 
                        onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>
                    <div>
                        <Input 
                        label="Menu Item Price"
                        className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                        name="menuItemPrice" 
                        type="number" 
                        value={menuItemPrice}
                        onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>
                    <div>
                        <Input label="Menu Item Description"
                        className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                         name="menuItemDescription" 
                         type="text" 
                         value={menuItemDescription}
                         onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>
                    <div>
                        <Input label="Menu Item Image" 
                        className="text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2"
                         name="menuItemImage" 
                         type="text" 
                         value={menuItemImage} 
                         onChange={(e)=>onChangeHandler(e)}
                        />
                    </div>
                    <div className="mt-4 place-content-end flex flex-row">
                        <button className="px-4 py-2 bg-blue-600 text-blue-50 hover:bg-blue-700 rounded mr-1" type="button" onClick={gobackHandler}>Back</button>
                        <button className="px-4 py-2 bg-blue-600 text-blue-50 hover:bg-blue-700 rounded" type="button">Add</button>
                    </div>

                </div>
            </Form>
        </div>
    )
}

export default AddMenus;