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

            <div>
                <ul className="list-group">
                    <li className="list-group-item list-props active">Menor Precio</li>
                    <li className="list-group-item list-props">Mayor Precio</li>
                    <li className="list-group-item list-props">Lo más nuevo</li>
                    <li className="list-group-item list-props">Distancia</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Ordenar
