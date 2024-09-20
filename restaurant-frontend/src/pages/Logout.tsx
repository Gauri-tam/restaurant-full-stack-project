import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("accessToken")

    const configuration: any = {
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        },
    }

    // console.log("configuration", configuration);

    const onclickHandler = async () => {
         navigate("/logout")
        try {
            await axios.post("http://localhost:8080/api/auth/logout", {}, configuration);
            //   localStorage.clear()
        } catch (error) {
            console.error("Error Occurred : ", error)
        }
    }

    return (
        <div>
            <button type="button"
                onClick={onclickHandler}
                className="text-gray-400 bg-black bg-opacity-80 focus:bg-gray-900 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm mr-1 px-3 py-2.5 text-center inline-flex items-center">
                Logout
            </button>
        </div>
    )
}

export default Logout;