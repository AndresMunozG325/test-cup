import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const RowBtns = () => {
    return (
        <div className="text-center">
            <div className="row-btns">
                <Link to="/ordenar" className="btn btn-light buttons"><i className="fas fa-sort-amount-down-alt me-2"></i>Orden</Link>
                <Link to="/filtros" className="btn btn-light buttons"><i className="fas fa-sliders-h me-2"></i>Filtros</Link>
                <Link to="/mapa" className="btn btn-light buttons"><i className="fas fa-map me-2"></i>Mapa</Link>
            </div>
        </div>
    )
}

export default RowBtns
