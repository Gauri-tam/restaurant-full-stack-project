import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";
import CartImageSlider from "../component/cart/CartImageSlider";

const Home: React.FC<{}> = () => {

    const navigate = useNavigate();
    const routerLocation = useLocation();

    // className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIPNSwJcoChSpI2A9C3OZxojRKZG4s2XyrQ&s')]"

    const onClickHandler = () => {
        navigate('/restaurant/get')
    }
    const isHomePage = routerLocation.pathname === "/";

    return (
        <Layout>
            {/* Only show Home content when the path is exactly "/" */}
            {isHomePage ? (
                <div className="m-1 flex flex-col justify-center -h-screen mx-52">
                    <div className="flex flex-col mx-52 ">
                        <div className="mx-52 ">
                            <CartImageSlider /> 
                        </div>
                        <div className=" font-bold text-3xl px-7 py-7 opacity-85 text-center place-content-center">
                            <h1 className=" text-5xl">Welcome to Restaurant</h1>
                            <h3 className="mt-9 text-3xl">
                                Explore The Food by clicking on the <b>Check Food</b> section
                            </h3>
                            <div className="mt-10 flex">
                                <button onClick={onClickHandler} type="button"
                                    className="px-4 py-2 mx-auto text-black bg-black bg-opacity-25 rounded-md flex justify-center items-center text-center border border-black">
                                    Check Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Outlet /> // Render child other routes 
            )}
        </Layout>
    )
}

export default Home;