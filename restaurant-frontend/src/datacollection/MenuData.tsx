import React, { useState, useEffect } from "react";
// import Error from "../messages/Error";
import Menu from './Menu';
import { restaurantApi } from "../features/api";
import { GrFormPreviousLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    restaurantId: number | null;
}

const MenuData: React.FC<Props> = ({ restaurantId }) => {
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState<any[]>([]);
    const [getTotalPages, setTotalPages] = useState<number>(1);
    const [getCurrentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        const getData = async () => {
            if (restaurantId) {
                try {
                    const response = await restaurantApi.get(`/getMenuByRestId/${restaurantId}`);
                    console.log("Response received:", response);
                    console.log("Response received:", response.data.totalPages);
                    setTotalPages(response.data.totalPages)
                    setCurrentPage(response.data.pageable)
                    if (response.status === 200) {
                        setMenuData(response.data);
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                }
            }

            if (restaurantId === null) {
                try {
                    const response = await restaurantApi.get("/getMenus");
                    console.log("Response received:", response);
                    console.log("Response received:", response.data);
                    setTotalPages(response.data.totalPages)
                    setCurrentPage(response.data.pageable)
                    if (response.status === 200) {
                        setMenuData(response.data.content);
                    }
                } catch (error) {
                    console.error("An error occurred:", error);
                }
            }
        };

        getData();
    }, [restaurantId]);

    const onPageHandler = (page: number) => {
        if (page >= 0 && page < getTotalPages) {
            setCurrentPage(page)
        }
    }

    const goBackHandler = () => {
        navigate("/data/restaurantData");
    };

    return (
        <div className="min-h-screen border-4 border-white flex justify-center overflow-y-auto bg-white"> {/* Full-page height and scrollable */}
            <div className="w-2/4">
                <ul className="border-2 border-black w-full p-1 mb-10">
                    <li className="grid grid-flow-col bg-black bg-opacity-30 border border-black p-4 rounded gap-1 justify-between">
                        <div>
                            <p className="text-black font-medium text-xl">All Menus Data</p>
                        </div>
                    </li>
                    {Array.isArray(menuData) && menuData.map((menuInfo: any) => (
                        <li className="border border-black p-4 rounded gap-1" key={menuInfo.menuItemId}>
                            <Menu
                                menuItemId={menuInfo.menuItemId}
                                menuItemName={menuInfo.menuItemName}
                                menuItemPrice={menuInfo.menuItemPrice}
                            />
                        </li>
                    ))}
                    {
                        getTotalPages !== undefined &&
                        getCurrentPage !== undefined &&
                        <Pagination
                            totalPages={getTotalPages}
                            currentPage={getCurrentPage}
                            onPageChange={onPageHandler}
                        />
                    }
                </ul>
                <div className="flex justify-center mt-5"> {/* Back button at the bottom with margin */}
                    <button
                        type="button"
                        onClick={goBackHandler}
                        className="flex flex-row items-center p-2 border-2 border-black rounded-lg bg-black bg-opacity-30"
                    >
                        <GrFormPreviousLink className="mr-2" />
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuData;
