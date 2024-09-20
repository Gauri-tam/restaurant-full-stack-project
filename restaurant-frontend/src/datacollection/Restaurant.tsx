
import { MdOutlineNavigateNext } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import MenuData from "./MenuData";
// import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { restaurantApi } from "../features/api";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    restaurantId: number,
    restaurantName: string,
    menus: {
        menuItemId: number,
        menuItemName: string,
        menuItemPrice: number
    }
}

const Restaurant: React.FC<Props> = ({ restaurantId, restaurantName, menus }) => {

    const navigate = useNavigate();
    // const [addButton, setAddButton] = useState<boolean>();

    const gotoTheButtonLink = () => {
        console.log("restaurantId", restaurantId);

        <MenuData restaurantId={restaurantId}  /> // search data by restaurant id;
        // <Menu menuItemId={menus.menuItemId} menuItemName={menus.menuItemName} menuItemPrice={menus.menuItemPrice} />
        navigate("/data/menuData")
    }

    // get restaurant
    const onViewHandler = () => {
        console.log("restaurantId", restaurantId);
        try {
            const response = restaurantApi.get(`/getRest/${restaurantId}`)
            console.log(response);
            
        } catch (error) {
            console.error("Error Occured!")
        }

    }

    // edit restaurant 
    const onEditHandler = (event: any) => {
        console.log("restaurantId", restaurantId);

        try {
            const response = restaurantApi.put(`/editRest/${restaurantId}`)
            console.log(response);
            
            
        } catch (error) {
            console.error("Error Occured!")
        }
        // event.preventDefault();
        // console.log(event.terget);

    }; // try the form once

    // delete restaurant 
    const onDeleteHAndler = () => {

        try {
            const response = restaurantApi.delete(`/deleteRest/${restaurantId}`)
        console.log(response);
        
            
        } catch (error) {
            console.error("Error Occured!", error)
        }
    }

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-6">
                <p>{restaurantId}</p>
                <p>{restaurantName}</p>

            </div>
            <div className=" grid grid-flow-col grid-cols-3 gap-4 ">
                {
                    <button
                        type="button"
                        className=" px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                        onClick={gotoTheButtonLink}
                    >
                        <div className="flex flex-row">
                            Menus
                            <MdOutlineNavigateNext className="mt-1.5" />
                        </div>
                    </button>
                }
                <button
                    type="button"
                    className=" px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onViewHandler}
                >
                    View
                </button>
                <button
                    className="px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onEditHandler}
                >
                    edit
                </button>
                <button
                    className="px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onDeleteHAndler}
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default Restaurant;