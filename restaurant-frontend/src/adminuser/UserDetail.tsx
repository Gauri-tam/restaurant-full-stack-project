import React from 'react'
import useFetch from 'react-fetch-hook'


export default function UserDetail(){

    const {data, isLoading, error} = useFetch("http://localhost:8080/api/auth/authenticat")

    
// Example of access request and obtaining token
fetch('http://localhost:8080/api/auth/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'yourUsername',
      password: 'yourPassword',
    }),
 })
    .then(response => response.json())
    .then(data => {
      const accessToken = data.accessToken;
      // Save the access token in a React state or state management system
    })
    .catch(error => console.error('Error logging in:', error));

    return(
        <div>
            <ul>
                {}
            </ul>
        </div>
    )
}