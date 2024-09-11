import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Layout from "../component/Layout";

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
            {isHomePage ? (  //Only show Home content when the path is exactly "/"
                <div className="w-full font-bold text-3xl px-7 py-7 opacity-85 text-center place-content-center">
                    <h1 className="mt-20 text-7xl">Welcome to the Restro</h1>
                    <h3 className="mt-9 text-5xl">
                        Explore The Food by clicking on the <b>Check Food</b> section
                    </h3>
                    <div className="mt-10 flex">
                        <button onClick={onClickHandler} type="button"
                            className="px-8 py-4 mx-auto text-black bg-black bg-opacity-25 rounded-md flex justify-center items-center text-center border border-black">
                            Check Now
                        </button>
                    </div>
                </div>
            ) : (
                <Outlet /> // Render child other routes 
            )}
        </Layout>
    )
}

export default Home;