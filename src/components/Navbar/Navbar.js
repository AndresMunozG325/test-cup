import React, { Component } from 'react'
import './Navbar.css'
class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return(
            <nav className="NavbarItems">
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
                
                <div className="menu-icon" onClick={this.handleClick}>
                    <div>
                        <i className= {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                        <p>MENU</p>
                    </div>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                </ul>
            </nav>
        )
    }
    
}

export default Navbar