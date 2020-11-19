import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/Logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component{

    render(){
        return(
            <div className="Navbar">
                <div className="Navbar_brand1">
                <img src={logo} alt=""/>
                    <span>v d c</span>
                </div>
                <div className="Navbar_brand2">
                    <span>Hombres</span>
                    <span>Mujeres</span>
                </div>
                <div className="Navbar_brand3">
                    <span>Contáctanos</span>
                    <span>Nosotros</span>
                </div>
            </div>
            
        );
    }
}

export default Navbar;