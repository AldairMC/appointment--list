import React from 'react';
import { useForm } from "react-hook-form";

//Style
import '../css/Form.scss'

const Form = ({ handleData }) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        handleData(data)
    }

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <h4>Relleno todos los campos para agendar una citas</h4>
            <p className="error">* Campos obligatorios</p>


            <input className="form-input" name="code" ref={register({ required: true, min: 1 })} placeholder="*Number identify" type="number"/>
            {errors.code && <span className="error">*Number identify is required</span>}

            <input className="form-input" name="name" ref={register({ required: true })} placeholder="*Name" />
            {errors.name && <span className="error">*Name is required</span>}

            <input className="form-input" name="lastName" ref={register({ required: true })} placeholder="*Last Name" />
            {errors.lastName && <span className="error">*LastName is required</span>}

            <input className="form-input" name="email" ref={register({ required: true })} placeholder="*Email" type="email"/>
            {errors.email && <span className="error">*Email is required</span>}

            <input className="form-input" name="direction" ref={register({ required: true })} placeholder="*Direction" />
            {errors.direction && <span className="error">*Direction is required</span>}
            
            <input className="form-input" name="hour" ref={register({ required: true })} type="datetime-local"/>
            {errors.hour && <span className="error">*Hour is required</span>}

            <textarea className="form-input" name="description" ref={register({ required: true })} placeholder="*Descripcion">
            </textarea>
            {errors.description && <span className="error">*Description is required</span>}
           
            <input className="form-submit" type="submit" />
        </form>
    );
}

export default Form;
