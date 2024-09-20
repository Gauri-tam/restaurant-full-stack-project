import { useEffect, useState } from "react";
import UserEmail from "./UserEmail";
import axios from "axios";

const GetUserId = () => {

    const [getId, setId] = useState();

   
    useEffect(() => {

         // get email
        const email = UserEmail();

         // find user role
        axios.get(`http://localhost:8080/api/auth/user/getEmailUser/${email}`)
            .then((response) => {
                console.log("user Id",response.data.userId); // geting role RESTAURANT OWNER || CUSTOMER
                setId(response.data.userId)
                // localStorage.setItem("userId", response.data.userId)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return getId;
}

export default GetUserId;