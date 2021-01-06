import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Nav.scss'

const Nav = () => {
    return (
        <nav className="nav-container">
            <div className="home">
                <Link to={'/'}>
                    <i className="fas fa-home"></i>
                </Link>
            </div>
            <div className="item">
                <Link to={'/all'}>
                    <i className="fas fa-list item-text">
                        <span className="text-name">ALL</span>
                    </i>
                </Link>
            </div>
            <div className="item">
                <Link to={'/new'}>
                    <i className="fas fa-plus-circle item-text">
                        <span className="text-name">NEW</span>
                    </i>
                </Link>
            </div>
        </nav>    
    );
}

export default Nav;