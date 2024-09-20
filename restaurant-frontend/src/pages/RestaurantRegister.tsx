import React, { useState } from 'react';
import Input from "../component/Input";
import axios from 'axios'
import { Form, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GeanerateId from '../features/GenerateId';

const RestaurantRegister: React.FC<{}> = () => {

    const navigate = useNavigate();
    const id = GeanerateId()
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [isRegister, setIsRegister] = useState<boolean>(false);

    const [userRegister, setUserRegister] = useState({
        userId: id,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });

    const { userId, firstName, lastName, email, password, phone } = userRegister;

    const onInputChange = (event: any) => {
        setUserRegister({
            ...userRegister,
            [event.target.name]: event.target.value
        });
    };

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/auth/restaurantRegistration", userRegister);
            setIsRegister(true);
            setShowMessage(true);
            localStorage.setItem("ownerId", userId+ "")
        } catch (error: any) {
            console.error("Registration failed:", error.response ? error.response.data : error.message);
            setShowMessage(false);
        }
    };

    if (isRegister) {
        navigate('/login'); // Corrected redirect logic
    }

    const onCancelHandler = () => {
        navigate('..');
    };

    return (
        <div className='py-2 px-2 h-screen flex flex-col items-center'>
            <Form className=' bg-transparent bgrounded bg-gray-400' method="POST" onSubmit={onSubmitHandler}>
                <div className=' mt-2 py-2'>
                    <img className='mx-auto my-0 h-24 w-auto rounded-full' src='https://png.pngtree.com/element_our/20200702/ourmid/pngtree-simple-registration-design-icon-image_2291733.jpg' alt='Registration Icon' />
                </div>
                <div className=' m-6 text-center'>
                    <p>Wlcome To The Restro App Plase Register Your Information.</p>
                    <p>If You Have Already Register Than Plase <Link to='/login'>Login</Link></p>
                </div>
                <div className=''>
                    <div className=''>
                        <Input
                            label="First Name"
                            name="firstName"
                            type='text'
                            value={firstName}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            label="Last Name"
                            name="lastName"
                            type='text'
                            value={lastName}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            label='Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            label='Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={(event) => onInputChange(event)} />
                    </div>
                    <div className=''>
                        <Input
                            label='Phone'
                            name='phone'
                            type='phone'
                            value={phone}
                            onChange={(event) => onInputChange(event)} />
                    </div>
                    <div className='float-right py-4 px-2 place-content-center flex flex-row'>
                        <div>
                            {showMessage && <p className='text-sm text-center text-blue-900'>Your Registered!</p>}
                        </div>
                        <button
                            type='button'
                            className="text-center flex flex-row py-2 px-4 "
                            onClick={onCancelHandler}>
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className="text-white bg-opacity-75 bg-black hover:bg-gray-950 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-950"
                        >
                            Submit
                        </button>

                    </div>
                </div>
            </Form>

        </div>
    );
}

export default RestaurantRegister;