import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Mapa.css';
mapboxgl.accessToken= 'pk.eyJ1IjoiYW5kcmVzbXVub3pnbyIsImEiOiJja25mY2toZHgwM2tyMzFwY3Q1dHI2d2FzIn0.ijEA9LTu5zTm3PSXxldDsw';

class Mapp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            lng: -70.65360515175374,
            lat: -33.4446729669702,
            zoom: 16
        }
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
    }
    render(){
        return(
            <div className="fondo-mapa">
                <div className="container">
                    <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}} />
                </div>
            </div>
        )
    }
}
export default Mapp;