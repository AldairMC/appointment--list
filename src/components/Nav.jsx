import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assest/deadline.png'
import '../css/Nav.scss'

const Nav = () => {
    return (
        <nav className="nav-container">
            <div className="home">
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" width="150" height="150"/>
                </Link>
            </div>
            <div className="item">
                <Link to={'/all'}>
                    <i className="fas fa-list item-text">
                        <span className="text-name">LIST</span>
                    </i>
                </Link>
            </div>
            <div className="item">
                <Link to={'/new'}>
                    <i className="fas fa-plus-circle item-text">
                        <span className="text-name">CREATE</span>
                    </i>
                </Link>
            </div>
        </nav>
    );
}

export default Nav;
