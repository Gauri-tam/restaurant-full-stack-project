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
import Logout from "./pages/Logout";
import UserData from "./datacollection/UserData";
import RestaurantData from "./datacollection/RestaurantData";
import MenuData from "./datacollection/MenuData";

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
          path: "data",
          children: [
            {
              path: "userData",
              element: <UserData />
            },
            {
              path: "restaurantData",
              element: <RestaurantData />
            },
            {
              path: "menuData",
              element: <MenuData restaurantId={null} />,
            }
          ]
        },
        {
          path: 'restaurant',
          children: [
            {
              path: "add",
              element: <AddRestaurant />,
            },
            {
              path: "addMenu",
              element: <AddMenus />
            },
            {
              path: "get",
              element: <Restaurants />,
            },
          ]
        },
        {
          path: 'logout',
          element: <Logout />
        }
      ]
    },
    {
      path: '*',
      element: <PageNotFound />
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