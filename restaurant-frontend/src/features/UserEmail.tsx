import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
    sub: string;
}

const UserEmail = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
        try {
            const payload = jwtDecode<JwtPayload>(token);
            // console.log("Decoded Payload:", payload); 
            return payload.sub;
        } catch (error) {
            console.error('Error decoding token:', error);
            return 'Invalid Token!';
        }
    } else {
        return 'User Is Not Logged In!';
    }
}

export default UserEmail;
