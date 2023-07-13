import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import './Menu.scss';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <button className="menu-toggle" onClick={handleMenuToggle}>
                <span>Menu</span>
                <AiOutlineDown className="arrow-icon" />
            </button>
            <ul className="menu-list">
                <li>
                    <a href="#">Movies</a>
                    <ul className="submenu">
                        <li>
                            <a href="#">Action</a>
                        </li>
                        <li>
                            <a href="#">Drama</a>
                        </li>
                        <li>
                            <a href="#">Comedy</a>
                        </li>
                        {/* Додайте решту жанрів */}
                    </ul>
                </li>
                <li>
                    <a href="#">Series</a>
                    <ul className="submenu">
                        <li>
                            <a href="#">Crime</a>
                        </li>
                        <li>
                            <a href="#">Thriller</a>
                        </li>
                        <li>
                            <a href="#">Sci-Fi</a>
                        </li>
                        {/* Додайте решту жанрів */}
                    </ul>
                </li>
                <li>
                    <a href="#">Cartoons</a>
                    <ul className="submenu">
                        <li>
                            <a href="#">Animated</a>
                        </li>
                        <li>
                            <a href="#">Fantasy</a>
                        </li>
                        <li>
                            <a href="#">Adventure</a>
                        </li>
                        {/* Додайте решту жанрів */}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
