import React, { useState, useEffect } from 'react';
import Login from '../pages/Login';
import { Navigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    element: React.ComponentType<any> 
}

const PrivateRoute: React.FC<Props> = ({ element, ...rest }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // To preserve the location of the protected route

    useEffect(() => {
        // Check authentication status
        const checkAuth = async () => {
            try {
                const result = await Axios.get('http://localhost:8080/api/auth/authenticate', { withCredentials: true }); // 'Access-Control-Allow-Origin': '*',  search about it 
                setAuthenticated(!!result.data); // Assuming a truthy result means authenticated
            } catch (error) {
                console.log(error);
                setAuthenticated(false);
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    console.log(authenticated);
    

    if (loading) {
        return <div className='text-center text-blue-600'>Loading...</div>; // Or a spinner/loading component
    }

    return authenticated ? (
        <Login />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace /> // Redirect to login page
    );
};

export default PrivateRoute;
