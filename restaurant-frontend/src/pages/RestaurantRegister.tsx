import React, { useState } from 'react';
import Input from "../component/Input";
import axios from 'axios'
import { Form, Link, redirect, useNavigate } from 'react-router-dom';

// interface Props extends React.HTMLAttributes<HTMLInputElement>{
//     isSubmited: object | boolean;
// }
const RestaurantRegister: React.FC<{}> = () => {

    const navigate = useNavigate();

    const [showMessage, setShowMassge] = useState<boolean>();
    const [isRegister, setIsRegister] = useState<boolean | null>()  // unmout the component 

    const [userRegister, setUserRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    });

    const { firstName, lastName, email, password, phone } = userRegister;

    const onInputChange = (event: any) => {
        setUserRegister({
            ...userRegister,
            [event.target.name]: event.target.value
        });
    };

    console.log(userRegister);

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/api/auth/restaurantRegistration", userRegister);
        setIsRegister(true);
        setShowMassge(true)

    };

    if (isRegister) {
        redirect('/login')
    }

    const onCancleHhandler = () => {
        navigate('..')
    }

    return (
        <div className='py-2 px-2 h-screen flex flex-col items-center'>
            <Form className=' border border-current rounded bg-gray-400' method="POST" onSubmit={onSubmitHandler}>
                <div className=' mt-2 py-2'>
                    <img className='mx-auto h-10 w-auto rounded-full' src='https://png.pngtree.com/element_our/20200702/ourmid/pngtree-simple-registration-design-icon-image_2291733.jpg' alt='Registration Icon' />
                </div>
                <div className=' m-6 text-center'>
                    <p>Wlcome To The Restro App Plase Register Your Information.</p>
                    <p>If You Have Already Register Than Plase <Link to='/login'>Login</Link></p>
                </div>
                <div className=''>
                    <div className=''>
                        <Input
                            label="First Name"
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            name="firstName"
                            type='text'
                            value={firstName}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            label="Last Name"
                            name="lastName"
                            type='text'
                            value={lastName}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            label='Email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={(event) => onInputChange(event)} />
                    </div>

                    <div className=''>
                        <Input
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
                            label='Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={(event) => onInputChange(event)} />
                    </div>
                    <div className=''>
                        <Input
                            className='text-sm text-gray-base w-full  mr-3 py-3 px-4 h-2 border border-gray-200 rounded mb-2'
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
                        <button type='button' className="text-center flex flex-row py-2 px-4 " onClick={onCancleHhandler}>Cancel</button>
                        <button type='submit' className="bg-blue-600 rounded py-2 px-4 text-center text-white " >Submit</button>

                    </div>
                </div>
            </Form>

        </div>
    );
}

export default RestaurantRegister;