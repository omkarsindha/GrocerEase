import { useState, useEffect } from 'react';
import logo from '../images/grocerease_nav.png';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || 'employee');

    useEffect(() => {
        localStorage.setItem('activeItem', activeItem);
    }, [activeItem]);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 bg-gray-900 text-white">
            <a href="/" className={`text-gray-300 ${activeItem === 'employee' ? 'font-bold' : ''}`} onClick={() => handleItemClick('employee')}><img src={logo} alt='Logo' className="w-40" /></a>
            <div className="flex items-center space-x-4">
                <a href="/employees" className={`text-gray-300 ${activeItem === 'employee' ? 'font-bold' : ''}`} onClick={() => handleItemClick('employee')}>Employees</a>
                <a href="/hire"  className={`text-gray-300 ${activeItem === 'hire' ? 'font-bold' : ''}`} onClick={() => handleItemClick('hire')}>Hire Worker</a>
            </div>
        </nav>
    );
};

export default Navbar;
