import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="body">
            <div className="cards container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="Rectangle.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen </p>
                                <div className="row-price">
                                    <div className="price">
                                        <p id="percent">43%</p>
                                    </div>
                                    <div className="price"> 
                                        <p className="prueba"><span id="current-price" >$5.990</span><span id="before">$5.990</span></p>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <div className="footer-card">
                                    <p id="distance">1.8 km, Providencia</p>
                                    <p id="rate"><i className="fas fa-star me-2"></i>4,3 (81)</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="Rectangle.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">¡2x1! 10 S. Levantamiento de Glúteos y Reafirmante Abdomen </p>
                                <div className="row-price">
                                    <div className="price">
                                        <p id="percent">43%</p>
                                    </div>
                                    <div className="price"> 
                                        <p className="prueba"><span id="current-price" >$5.990</span><span id="before">$5.990</span></p>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <div className="footer-card">
                                    <p id="distance">1.8 km, Providencia</p>
                                    <p id="rate"><i className="fas fa-star me-2"></i>4,3 (81)</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        

    )
}

export default Home
