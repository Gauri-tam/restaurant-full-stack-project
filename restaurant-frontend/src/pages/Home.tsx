// import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home: React.FC<{}> = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home;