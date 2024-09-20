import axios from "axios";
import { useEffect, useState } from "react";
import Error from "../messages/Error";
import User from "./User";

const UserData = () => {

    const[userData, setUserData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {

            try {
                const response = await axios.get("http://localhost:8080/api/auth/user/getUser")
                console.log("Response received:", response);

                if (response.status === 200) {
                    setUserData(response.data);
                }
            } catch (error) {
                <div><Error message="Not Able to get Data " /></div>
            }
        }
        getData();

    }, [])

    return (
        <>
            <div className="flex justify-center mt-5">
                <div className="flex place-items-center w-2/4 justify-center gap-4">
                    <ul className=" border-2 border-black w-full p-1">
                        <li className="mt-0 bg-black bg-opacity-30 border border-black p-4 rounded gap-1">
                            <div >
                                <p className="text-black font-medium text-xl">All User Data</p>
                            </div>
                        </li>
                        {userData?.map((userInfo: any) => (
                            <li className="border border-black p-4 rounded gap-1" key={userInfo.userId}>
                                {
                                    <User
                                        userId={userInfo.userId}
                                        username={userInfo.username}
                                        roles={userInfo.roles}
                                        phone={userInfo.phone}
                                    />
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserData;