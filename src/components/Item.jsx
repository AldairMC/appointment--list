import React from 'react';
import '../css/Item.scss'
import doc1 from '../assest/doctor_one.png'
import doc2 from '../assest/doctor_two.png'
import doc3 from '../assest/doctor_three.png'

const doctors = [doc1, doc2, doc3]

const Item = ({ appointment }) => {

    const doctor_aleatory = () => doctors[(Math.random() * 2).toFixed(0)]

    let { name, lastName, code, description, direction, email, hour } = appointment
    return (
        <div className="container-item">
            <div className="__items">
                <div className="__info_principal">
                  <div className="__logo">
                    <img src={doctor_aleatory()} width="100" height="100" alt="logo"/>
                  </div>
                  <div className="__info_p">
                    <div>
                        <span><strong><i class="fas fa-user"></i></strong> {name} {lastName}</span>
                    </div>
                    <div>
                        <span><strong><i class="fas fa-id-card"></i></strong> {code}</span>
                    </div>
                    <div>
                        <span><strong><i class="fas fa-map-signs"></i></strong> {direction}</span>
                    </div>
                    <div>
                        <span><strong><i class="fas fa-at"></i></strong> {email}</span>
                    </div>
                  </div>
                </div>
                <div className="__times">
                  <div className="__time">
                    <span>
                      <strong><i class="fas fa-calendar-day"></i></strong> {hour.substring(0, 10)}
                    </span>
                  </div>
                  <div className="__time">
                    <span>
                      <strong><i class="fas fa-clock"></i></strong> {hour.substring(11, 16)}
                    </span>
                  </div>
                </div>
                <div className="__desc">
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default Item;
