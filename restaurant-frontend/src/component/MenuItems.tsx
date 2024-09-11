import Menus from "./Menus"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    menuData: any[]
}

const MenuItems: React.FC<Props> = ({ menuData }) => {
  
    console.log("menuData",menuData); //w-60 h-40 p-4 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center

    return (
        <>
            {Array.isArray(menuData) && menuData?.map((menuItem) => (
                <div key={menuItem.menuItemId} className="mt-10 ml-5 bg-white rounded-lg shadow-lg flex flex-col place-content-center">
                    <Menus
                        image={menuItem.menuItemImage}
                        name={menuItem.menuItemName}
                        description={menuItem.menuItemDescription}
                        price={menuItem.menuItemPrice}
                    />
                </div>  
            ))}
        </>
    )
}

export default MenuItems;