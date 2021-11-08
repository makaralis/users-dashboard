import React from 'react';
import './Navbar.scss';
 
const Home = () => {
    return (
    <div className="navbar">
        <img src='./search.png' alt="logo" height="20px" width="20px"/>
        <img src='./notification.png' alt="logo" height="20px" width="20px" className="notification"/>
        <img src='./homer-simpson.png' alt="logo" height="35px" width="35px" className="logo"/>
    </div>
    )
}

export default Home;