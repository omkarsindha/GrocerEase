import React, { useState } from 'react';
import logo from '../images/grocerease_nav.png'
const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Employee');
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-teal-200">
            <div className="container-fluid">
                <img src={logo} alt='Logo' width='170px'></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="/employees" > Employee </a>
                        <a className="nav-link active" href="/hire" > Hire Worker </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
