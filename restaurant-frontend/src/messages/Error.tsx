import React from "react"
import { useNavigate } from "react-router-dom"

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    message: string
}

const Error: React.FC<Props> = ({ message }) => {

    const navigate = useNavigate()

    const goBackToHandler = () => {
        navigate("/")
    }

    const loginHandler = () => {
        navigate('/login')
    }

    return (
        <div className="bg-transparent text-center grid place-content-center max-h-56 bg-opacity-0">
            <div>
                <h1 className=" bg-transparent text-opacity-85 text-black font-semibold text-3xl">Oops..!</h1>
            </div>
            <div>
                <p className=" bg-transparent text-opacity-85 text-black font-semibold mt-5 text-xl grid palce-items-center bg-opacity-0" >{message}</p>
            </div>
            <div className="bg-transparent text-opacity-85 text-black font-semibold mt-5 text-xl place-items-center bg-opacity-0">
                <p>Please Login!</p>
            </div>
            <div className="mt-5 end-4 float-right py-4 px-2 place-content-end flex flex-row bg-opacity-0">
                <button
                    type="button"
                    className="text-center font-semibold flex flex-row py-2 px-4 bg-opacity-0 "
                    onClick={goBackToHandler}>
                    Okay
                </button>
                <button
                    type="button" 
                    onClick={loginHandler}
                    className=" text-white opacity-75 bg-black hover:bg-gray-950 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950">
                    Login
                </button>
            </div>

        </div>
    )
}

export default Error;