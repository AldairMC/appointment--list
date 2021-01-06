import React from 'react';

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
        <div>
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
