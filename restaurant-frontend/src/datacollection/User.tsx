import axios from "axios";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    userId: number,
    username: string,
    roles: string,
    phone: number
}

const User: React.FC<Props> = ({ userId, username, roles, phone }) => {

    // show user 
    const onViewHandler = async () => {
        console.log("userId", userId);
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/user/getUser/${userId}`)
            console.log(response);

        } catch (error) {
            console.error("an Error Occured", error)
        }
    }

    // delete user
    const onDeleteHAndler = async () => {
        console.log("userId", userId);
        try {
            const response = await axios.delete(`http://localhost:8080/api/auth/user/deleteUser/${userId}`)
            console.log(response);

        } catch (error) {
            console.error("an Error Occured", error)
        }
    }

    // edit user
    const onEditHandler = async () => {
        // event.preventDefault();
        // console.log(event.terget);
        console.log("userId", userId);
        try {
            const response = await axios.put(`http://localhost:8080/api/auth/user/editUser/${userId}`)
            console.log(response);
            
        } catch (error) {
            console.error("an Error Occured", error)
        }

    };

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-6">
                <p>{userId}</p>
                <p>{username}</p>
                <p>{phone}</p>
                <p>{roles}</p>
            </div>
            <div className=" grid grid-flow-col grid-cols-3 gap-4 ">
                <button
                    type="button"
                    className=" px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onViewHandler}
                >
                    View
                </button>
                <button
                    className="px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onEditHandler}
                >
                    edit
                </button>
                <button
                    className="px-4 py-1 bg-black bg-opacity-25 rounded-lg"
                    onClick={onDeleteHAndler}
                >
                    delete
                </button>
            </div>
        </div>
    )
}

export default User;