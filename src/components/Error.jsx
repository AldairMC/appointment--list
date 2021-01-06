import React from 'react';

import '../css/Error.scss'

const Error = () => {
    return (
        <div className="container_error">
            <div className="__text">
                <i className="fas fa-exclamation"></i>
            </div>
            <br/>
            <div className="__text">
                <span>404 - Page no found</span>
            </div>
        </div>
    );
}

export default Error;
