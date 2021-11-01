import React from 'react';
import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Animals">Animals</NavLink></li>
                </ul>
            </nav>

      
        </div>
    );
};

export default Nav;