import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
           <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">Shop</a>
                <a href="">Home</a>
                <a href="">Inventory</a>
                <a href="">About</a>
            </div>
           </nav>
    );
};

export default Header;