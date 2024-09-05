import axios from "axios";
import { redirect,} from 'react-router-dom'
import Error from "../messages/Error";
const token = ""
const RestaurantByName = () => {

    return (
        <div className="p-4 max-w-xll mx-auto mt-16">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-400">
                    <h1 className="text-lg font-bold">{}</h1>
                    {/* <span className="text-gray-600">(3 items)</span> */}
                </div>
                <div className="grid grid-cols-3 gap-4 content-stretch">
                    {}
                </div>
            </div>
        </div>
    )
}

export default RestaurantByName;

interface LoaderArgs {
    params: {
      restaurantName: any;
    };
    request: Request;
  }

export async function actionRestaurant({params}: LoaderArgs) {
    const {restaurantName} = params;

    const response = await axios.get('http://localhost:8080/restaurant/get/' + restaurantName, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
    )

    if (response.status === 403) {
        return <Error message="You have Login Again!"/>
    }
    redirect('..')
}