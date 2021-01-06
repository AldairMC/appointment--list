import React from 'react';
import '../css/Item.scss'


const Item = ({ appointment }) => {
    let { name, lastName, code, description, direction, email, hour } = appointment 
    return (
        <div className="container-item">
            <div className="__items">
                <div>
                    <span><strong>Nombre:</strong> {name} {lastName}</span>
                </div>
                <div>
                    <span><strong>Documento:</strong> {code}</span>
                </div>
                <div>
                    <span><strong>Direccion:</strong> {direction}</span>
                </div>
                <div>
                    <span><strong>Correo:</strong> {email}</span>
                </div>
                <div>
                    <span><strong>Fecha:</strong> {hour.substring(0, 10)} || <strong>Hora:</strong> {hour.substring(11, 16)}</span>
                </div>
                <div>
                    <span><strong>Detalle:</strong> {description}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
