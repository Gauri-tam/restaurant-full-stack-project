// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BackGroundImg from './images/wooden-board-empty-table-top-blurred-background.jpg'
import Login from "./pages/Login";
import Home from "./pages/Home";
import RestaurantRegister from './pages/RestaurantRegister';
import CustomerRegister from './pages/CustomerRegister';
import AddMenus from './pages/AddMenus';
import PageNotFound from "./component/PageNotFound";
import AddRestaurant from "./pages/AddRestaurant";
import Restaurants from "./pages/Restaurants";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: 'restaurantRegister',
          element: <RestaurantRegister />
        },
        {
          path: 'customerRegister',
          element: <CustomerRegister />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'restaurant',
          children: [
            {
              path: "add",
              element: <AddRestaurant />,
              children: [
                {
                  path: "addMenu",
                  element: <AddMenus />
                }
              ] // post restaurant data in database with menus
            },
            {
              path: "get",
              element: <Restaurants />, // get all restaurant data
            },
          ]
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound />  // user is redirect to Other Page 
    }
  ])

  return (
    <div className="bg-scroll bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BackGroundImg})` }}>
      <div className="w-full">
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )


}

export default App;