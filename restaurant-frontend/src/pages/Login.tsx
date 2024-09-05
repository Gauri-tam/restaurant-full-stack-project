import React, { useState } from 'react';
import axios from 'axios';
import Input from '../component/Input';
import Error from '../messages/Error';
import { Link, Form, useNavigate, redirect } from 'react-router-dom';

const Login: React.FC<{}> = () => {

    const navigate = useNavigate()

    const [showMessage, setShowMessage] = useState<boolean>()
    const [isLogin, setIsLogin] = useState<boolean | null>()
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    const { email, password } = userLogin

    function onChangeHandler(event: any) {
        event.preventDefault();
        setUserLogin({ ...userLogin, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (userLogin.email !== userLogin.email.toLowerCase()) {
            return;
        }

        console.log("userLogin",userLogin);
        

        const response = await axios.post('http://localhost:8080/api/auth/authenticate', userLogin)
        setIsLogin(true)
        setShowMessage(true)

        console.log("response",response);

        if (response.status === 403) {
            return <Error message='Request failed with status code 403' />
        }

        const jwtToken = response.data.accessToken;

        localStorage.setItem('token', jwtToken);
    }

    if (isLogin) {
        redirect('/restaurant/get')
    }

    const onCancleHhandler = () => {
        navigate('..')
    }

    return (
        <div className='py-2 px-2 h-screen flex flex-col items-center'>
            <Form className='mt-4 border border-current rounded bg-gray-400' method='POST' onSubmit={(e) => onSubmitHandler(e)}>

                <div className='mt-4 px-2'>
                    <img className="mx-auto h-10 w-auto rounded-full" src="https://i.pinimg.com/736x/3f/5a/d8/3f5ad816179850d23695910e906554a7.jpg?color=indigo&shade=600" alt="Login From icon" />
                    <p>If You Don't Have an Account yet That Please <Link to="/register">Register</Link> first</p>
                </div>
                <div className='mt-4'>
                    <div className=''>
                        <Input
                            label='User Email'
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            name='email'
                            type='email'
                            value={email}
                            onChange={(e) => { onChangeHandler(e) }} />
                    </div>

                    <div className=''>
                        <Input
                            label='Password'
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => { onChangeHandler(e) }} />
                    </div>
                    <div className='float-right py-4 px-2 place-content-center flex flex-row'>
                        <div>
                            {showMessage && <p className='text-sm text-center text-blue-900'>Your loing Check Food!</p>}
                        </div>
                        <button type="button" className="text-center flex flex-row py-2 px-4 " onClick={onCancleHhandler}>Cancel</button>
                        <button type="submit" className="bg-blue-600 rounded py-2 px-4 text-center text-white">Login</button>
                    </div>
                </div>
            </Form>

        </div>
    );
}

export default Login;