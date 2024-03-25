import React from "react";
import { logo_url } from "../utils/mockdata";

const Header = () => {
    return(
        <div className="header">
            
            <div className="logo">
                <img className ="logo" alt = "logo-img" src = {logo_url}/>
            </div>
            <div className="nav-items">
                <ul className="nav-list-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;