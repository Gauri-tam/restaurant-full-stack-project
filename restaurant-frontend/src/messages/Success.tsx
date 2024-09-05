import React from "react"
interface Props extends React.HTMLAttributes<HTMLInputElement>{
message: string
}

const Success:React.FC<Props> = ({message}) =>{
    return(
        <div>
            <h1>Success!</h1>
            <p>{message}</p>
        </div>

    )
}

export default Success;