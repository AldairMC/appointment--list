import React from 'react';

//style
import '../css/Error.scss'

//compoents
import Item from './Item'

const List = () => {

    let key = '';
    let appointment = [];
    
    for (let i=0; i<=localStorage.length-1; i++) {
        key = localStorage.key(i);
        if(key[0] === 'a'){
            appointment.push(JSON.parse(localStorage.getItem(key)))
        }
    }
        
    return (
        (appointment.length === 0)?
        <div className="container_error">
            <div className="__text">
                <i className="fas fa-exclamation"></i>
            </div>
            <br/>
            <div className="__text">
                <span>Listado de citas vacío</span>
            </div>
        </div>
        : <div>
            {
                Object.keys(appointment).map(key => (
                    <Item 
                        key={key}
                        appointment={appointment[key]}
                    />
                ))
            }
        </div>
    );
}

export default List;
