import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    
    render() {
        return(
            <nav className="NavbarItems">
                <Link to="/">
                <span className="navbar-logo ms-3 height">
                    <img className="letter" src="Fill 1.png" alt="c"></img>
                    <img className="letter" src="Fill 3.png" alt="u"></img>
                    <img className="letter" src="Fill 5.png" alt="p"></img>
                    <img className="letter" src="Fill 7.png" alt="o"></img>
                    <img className="letter" src="Fill 10.png" alt="n"></img>
                    <img className="letter" src="Fill 12.png" alt="a"></img>
                    <img className="letter" src="Fill 14.png" alt="t"></img>
                    <img className="letter" src="Fill 16.png" alt="i"></img>
                    <img className="letter" src="Fill 18.png" alt="c"></img>
                </span>
                </Link>
                <div className="space">
                    <div className="other-btns">
                        <i className="fas fa-search btns"></i>
                        <p className="hide">BUSCAR</p>
                    </div>
                </div>
                <div className="other-btns">
                    <i className="fas fa-user-circle btns"></i>
                    <p className="hide">CUENTA</p>
                </div>
                
                <div className="menu-icon">
                    <div>
                        <i className='fas fa-bars'></i>
                        <p>MENU</p>
                    </div>
                </div>
            </nav>
        )
    }
    
}

export default Navbar