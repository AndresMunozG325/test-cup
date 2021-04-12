import React from 'react'
import { Link } from 'react-router-dom';
import './Ordenar.css';

const Filtros = () => {
    return (
        <div>
            <div className="close">
                <Link to="/"><i className="fas fa-times"></i></Link>
            </div>
            <div className="container content">
                <Link to="/"><i className="fas fa-chevron-left me-3"></i></Link>
                <p className="title">  Filtrar por</p>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <p className="in-line">Categorías </p>
                        <p className="right"><i className="fas fa-chevron-down"></i></p>
                    </li>
                    <li className="list-group-item">
                        <p className="in-line">Comunas </p>
                        <p className="right"><i className="fas fa-chevron-down"></i></p>
                    </li>
                    <li className="list-group-item">
                        <p className="in-line">Distancias </p>
                        <p className="right"><i className="fas fa-chevron-down"></i></p>
                    </li>
                    <li className="list-group-item">
                        <p className="in-line">Rango de Distancias </p>
                        <p className="right"><i className="fas fa-chevron-down"></i></p>
                    </li>
                </ul>
            </div>

            {/* <div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <p className="in-line">Categorías </p>
                        <p className="right"><i className="fas fa-chevron-down"></i></p>


                        <h2 className="accordion-header list-props" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            Categorías
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header list-props" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Comunas
                        </button>
                        </h2>
                        {/* <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div> 
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}

export default Filtros
