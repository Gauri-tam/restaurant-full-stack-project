import { HTMLAttributes, ReactNode } from "react";
import Success from "./Success";

interface Props extends HTMLAttributes<HTMLInputElement> {
    message: string,
    isSubmited : boolean | null | undefined
}

const Message: React.FC<Props> = ({ message, isSubmited }) => {

    let context: string | ReactNode;

    if (isSubmited) {
         context = (<Success message={`${message}Successfull!`} />)
    }
    else {
        context = (`Please Fill out the form or `)
    }
    
    return(
        <div className="">
            {context}
        </div>
    )   
}

export default Message;