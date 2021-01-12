import React from 'react';
import alert from '../assest/siren.png'

import '../css/Error.scss'

const Error = () => {
    return (
        <div className="container_error">
            <div className="__text">
              <img src={alert} width="100" height="100" alt="alert"/>
            </div>
            <br/>
            <div className="__text">
                <span>404 - Page not found</span>
            </div>
        </div>
    );
}

export default Error;
