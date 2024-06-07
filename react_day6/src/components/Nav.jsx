import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Nav.css'; 

const Nav = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    function signOut() {
        localStorage.clear();
        navigate('/');
    }


    return (
        <div className="nav">
        <h3>Pokemon Router</h3>
        <span>Welcome, {userName}</span>
        <div>
            <button onClick={() => navigate('/home')}>Home</button> 
            <button onClick={() => navigate('/home/wiki')}>Wiki</button> 
            <button onClick={() => navigate(-1)}>Go Back</button>
            <button onClick={() => navigate(1)}>Go Forward</button>
            <button onClick={() => signOut()} className="sign-out">Sign Out</button>
        </div>
        </div>
    );
};

export default Nav;