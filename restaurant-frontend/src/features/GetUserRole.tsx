import { useEffect, useState } from "react";
import UserEmail from "./UserEmail";
import axios from "axios";

const GetUserRole = () => {

    const [getRole, setRole] = useState();

   
    useEffect(() => {

         // get email
        const email = UserEmail();

         // find user role
        axios.get(`http://localhost:8080/api/auth/user/getEmailUser/${email}`)
            .then((response) => {
                console.log("roles", response.data.roles); // geting role RESTAURANT OWNER || CUSTOMER
                setRole(response.data.roles)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return getRole;
}

export default GetUserRole;