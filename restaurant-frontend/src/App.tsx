// import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RestaurantDetails from "./pages/RestaurantDetails";
import Restaurants from "./pages/Restaurants";
import RestaurantById from './component/RestaurantById';
import RestaurantByName from './component/RestaurantByName';
import RestaurantRegister from './pages/RestaurantRegister';
import CustomerRegister from './pages/CustomerRegister';
import AddMenus from './component/AddMenus';

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
              element: <Restaurants />,
              children:[
                {
                  path:"addMenu",
                  element: <AddMenus />
                }
              ] // post restaurant data in database
            },
            {
              path: "get",
              element: <RestaurantDetails />, // get all restaurant data
              children: [
                {
                  path: ':restaurantId',
                  element: <RestaurantById />
                },
                {
                  path: ':restaurantName',
                  element: <RestaurantByName />
                }
              ]
            },
          ]
        }
      ]
    }

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )


}

export default App;