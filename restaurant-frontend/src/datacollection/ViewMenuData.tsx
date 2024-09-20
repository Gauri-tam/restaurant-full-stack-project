import React, { useState } from "react";


interface MenuData extends React.HTMLAttributes<HTMLInputElement> {
    menuItemName: string,
    menuItemPrice: number,
    menuItemDescription: string,
    menuItemImage: string,
}

const ViewMenuData: React.FC<MenuData> = ({ menuItemName, menuItemPrice, menuItemDescription, menuItemImage }) => {

    const [menuView, setMenuView] = useState<boolean>();

    return (
        <>
            {
                menuView &&
                <div className="">
                    <form className="flex justify-center text-center">
                        <div>
                            View dat of Menu
                        </div>
                        <div>
                            <label htmlFor="menuName">menu Item Name</label>
                            <input name="menuName" type="text" value={menuItemName} />
                        </div>
                        <div>
                            <label htmlFor="menuPrice">menu Item Price</label>
                            <input name="menuPrice" type="number" value={menuItemPrice} />
                        </div>
                        <div>
                            <label htmlFor="menuDescription">menu Item Description</label>
                            <input name="menuDescription" type="text" value={menuItemDescription} />
                        </div>
                        <div>
                            <label htmlFor="menuImage">menu Item Image</label>
                            <input name="menuImage" type="text" value={menuItemImage} />
                        </div>
                        <div>
                            <div className="">
                                <button className="">Okay</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </>


    )
}

export default ViewMenuData;