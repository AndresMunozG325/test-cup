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
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed list-props" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Categorías
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="list-group"role="group" aria-label="Basic outlined example">               
                                <button type="button" className="btn btn-outline-primary list-props" aria-current="true">
                                    Productos
                                </button>
                                <button type="button" className="btn btn-outline-primary list-props">Bienestar y Salud</button>
                                <button type="button" className="btn btn-outline-primary list-props">Belleza</button>
                                <button type="button" className="btn btn-outline-primary list-props">Servicios</button>
                                <button type="button" className="btn btn-outline-primary list-props">Gastronomía</button>
                                <button type="button" className="btn btn-outline-primary list-props">Viajes y Turismo</button>
                                <button type="button" className="btn btn-outline-primary list-props">Panoramas</button>
                                <button type="button" className="btn btn-outline-primary list-props">Especiales</button>
                                <button type="button" className="btn btn-outline-primary list-props">Cerca de mí</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed list-props" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Comunas
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="list-group"role="group" aria-label="Basic outlined example">               
                                <button type="button" className="btn btn-outline-primary list-props">San Miguel</button>
                                <button type="button" className="btn btn-outline-primary list-props">Quilicura y Salud</button>
                                <button type="button" className="btn btn-outline-primary list-props">Providencia</button>
                                <button type="button" className="btn btn-outline-primary list-props">La Florida</button>
                                <button type="button" className="btn btn-outline-primary list-props">Las Condes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed list-props" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Distancia
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-center">
                            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck1">1 Km</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck2">3 km</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">5 Km</label>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed list-props" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Rango de Distancias
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">                            
                            <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck1">Radio de 10 Kms</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck2">Radio de 40 Kms</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">Radio de 80 Kms</label>
                            </div>                            
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Filtros
