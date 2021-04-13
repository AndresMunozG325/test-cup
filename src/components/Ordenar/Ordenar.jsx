import React from 'react'
import { Link } from 'react-router-dom';
import './Ordenar.css';

const Ordenar = () => {
    return (
        <div>
            <div className="close">
                <Link to="/"><i className="fas fa-times"></i></Link>
            </div>
            <div className="container content">
                <Link to="/"><i className="fas fa-chevron-left me-3"></i></Link>
                <p className="title">  Ordenar por</p>
            </div>
            <div className="list-group"role="group" aria-label="Basic outlined example">               
                <button type="button" className="btn btn-outline-primary list-props" aria-current="true">
                    Menor precio
                </button>
                <button type="button" className="btn btn-outline-primary list-props">Mayor precio</button>
                <button type="button" className="btn btn-outline-primary list-props">Lo más nuevo</button>
                <button type="button" className="btn btn-outline-primary list-props">Distancia</button>
            </div>
        </div>
    )
}
export default Ordenar
