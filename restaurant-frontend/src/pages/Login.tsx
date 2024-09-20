import React, { useState } from 'react';
import axios from 'axios';
import Input from '../component/Input';
import Error from '../messages/Error';
import { Link, Form, useNavigate } from 'react-router-dom';

const Login: React.FC<{}> = () => {

    const navigate = useNavigate()
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    const [message, setMessage] = useState<string>('You are Login Now')
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const { email, password } = userLogin

    // saving data
    function onChangeHandler(event: any) {
        event.preventDefault();
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!emailRegex.test(userLogin.email)) {
            setMessage("Email must be a valid Gmail address");
            return
        }

        // Ensure email is in lowercase
        if (userLogin.email !== userLogin.email.toLowerCase()) {
            setMessage("Email must be in lower Case");
            return;
        }

        console.log("userLogin", userLogin);

        if (userLogin.email.endsWith("@gmail.com")) {
            setMessage("email is Must includes @gmail.com")
        }else{
            setMessage("User Login!")
        }
        
        try {
            const response = await axios.post('http://localhost:8080/api/auth/authenticate', userLogin);

            console.log("response", response);

            //store token
            if (response.status === 200 && response.data?.accessToken) {
                localStorage.setItem('accessToken', response.data.accessToken);
                setMessage("You are Login!")
                // navigate("/restaurant/get")
            }

        } catch (error: any) {
            console.error("Error during authentication:", error);

            if (error.response && error.response.status === 403) {
                return <Error message='Request failed with status code 403' />
            }
        }
    };

    const onCancleHhandler = () => {
        navigate('..')
    }

    return (
        <div className='py-2 px-2 h-screen flex flex-col items-center'>
            <Form className='mt-4 bg-transparent opacity-95 rounded bg-gray-400' method='POST' onSubmit={onSubmitHandler}>
                <div className='mt-4 px-2'>
                    <img className="mx-auto h-10 w-auto rounded-full" src="https://i.pinimg.com/736x/3f/5a/d8/3f5ad816179850d23695910e906554a7.jpg?color=indigo&shade=600" alt="Login From icon" />
                    <p>If You Don't Have an Account yet That Please <Link to="/register">Register</Link> first</p>
                </div>
                <div className='mt-4'>
                    <div className=''>
                        <Input
                            label='User Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={(e) => { onChangeHandler(e) }} />
                    </div>

                    <div className=''>
                        <Input
                            label='Password'
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => { onChangeHandler(e) }} />
                    </div>
                    <div className='float-right py-4 px-2 place-content-center flex flex-row'>
                        <div>
                            <p className='text-sm mt-3 text-red-950'>{message}</p>
                        </div>
                        <button
                            type="button"
                            className="text-center flex flex-row py-2 px-4 "
                            onClick={onCancleHhandler}>Cancel</button>
                        <button
                            type="submit"
                            className="text-white bg-opacity-75 bg-black hover:bg-gray-950 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950">
                            Login
                        </button>
                    </div>
                </div>
            </Form>

        </div>
    );
}

export default Login;