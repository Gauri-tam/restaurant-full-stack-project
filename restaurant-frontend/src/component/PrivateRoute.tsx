import React, { useState, useEffect } from 'react';
import Login from '../pages/Login';
import { Navigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

interface Props extends React.HTMLAttributes<HTMLInputElement>{
    element: React.ComponentType<any> 
}

const PrivateRoute: React.FC<Props> = ({ element, ...rest }) => {

    // customer || restaurant owner
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // To preserve the location of the protected route
    const location = useLocation(); 

    useEffect(() => {
        // Check authentication status
        const checkAuth = async () => {
            try {
                 // 'Access-Control-Allow-Origin': '*',  search about it 
                const result = await Axios.get('http://localhost:8080/api/auth/authenticate', { withCredentials: true });

                 // Assuming a truthy result means authenticated
                setAuthenticated(!!result.data);
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

        // Or a spinner/loading component
        return <div className='text-center text-blue-600'>Loading...</div>; 
    }

    return authenticated ? (
        <Login />
    ) : (
        // Redirect to login page
        <Navigate to="/login" state={{ from: location }} replace /> 
    );
};

export default PrivateRoute;
