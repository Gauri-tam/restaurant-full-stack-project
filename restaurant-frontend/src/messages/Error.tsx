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
        <div className="text-center grid place-content-center max-h-56">
            <div>
                <h1>An Error Occured!</h1>
            </div>
            <div>
                <p className="grid palce-items-center" >{message}</p>
            </div>
            <div className="float-right py-4 px-2 place-content-center flex flex-row">
                <button
                    type="button"
                    className="text-center flex flex-row py-2 px-4 "
                    onClick={goBackToHandler}>
                    Okay
                </button>

                <button
                    type="button"
                    onClick={loginHandler}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                </button>
            </div>

        </div>
    )
}

export default Error;