import { useState } from "react";
import { restaurantApi } from "../features/api";
import ViewMenuData from "./ViewMenuData";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    menuItemId: number,
    menuItemName: string,
    menuItemPrice: number
}

const Menu: React.FC<Props> = ({ menuItemId, menuItemName, menuItemPrice }) => {
    const [viewData, setViewData] = useState<any[]>();

    const editData = {
        menuItemId: menuItemId,
        menuItemName: menuItemName,
        menumenuItemImage: "",
        menuItemDescription: "",
        menuItemPrice: menuItemPrice
    };

    // get by id
    const onviewHandler = async () => {
        console.log("menuItemId", menuItemId);
        try {
            const response = await restaurantApi.get(`/getMenu/${menuItemId}`)
            console.log("viewData", response);
            setViewData(response.data)

        } catch (error) {
            console.error(`${menuItemId} Id Not Found!`)
        }
    }

    // edit By Id
    const onEditHandler = async () => {
        console.log("menuItemId", menuItemId);
        try {
            const response = await restaurantApi.put(`/editMenu/${menuItemId}`,
                editData
            )
            console.log(response);

        } catch (error) {
            console.error(`${menuItemId} Id Not Found!`)
        }
    };

    // delete by id
    const onDeleteHAndler = async () => {
        console.log("menuItemId", menuItemId);
        try {
            const response = await restaurantApi.delete(`/deleteMenu/${menuItemId}`)
            console.log(response);

        } catch (error) {
            console.error(`${menuItemId} Id Not Found!`)
        }
    }

    return (
        <>
            {Array.isArray(viewData) && viewData.map((item) => (
                <ViewMenuData
                    menuItemName={item.menuItemId}
                    menuItemPrice={item.menuItemPrice}
                    menuItemImage={item.menuItemImage}
                    menuItemDescription={item.menuDescription}
                />
            ))}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                    <p>{menuItemId}</p>
                    <p>{menuItemName}</p>
                    <p>{menuItemPrice}</p>
                </div>
                <div className=" grid grid-flow-col grid-cols-3 gap-4 ">
                    <button
                        type="button"
                        className=" px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                        onClick={onviewHandler}
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
        </>

    )
}

export default Menu;