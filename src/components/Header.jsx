import React from 'react';
import Logo from "../assets/images/logo.png";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="Todo-List"></img>
                </div>
            </nav>
        </header>
    )
}

export default Header
