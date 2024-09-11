import React from "react";
import './index.css';
import { Link } from "react-router-dom";

export const Header = () =>{
    return(
        <header className="Header">
            <h1 className="Header-Title-">Galeria de Gatitos</h1>
            <nav className="Header-Nav">
                <ul>
                    <li className="Header-Nav-li">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="Header-Nav-li">
                        <Link to="/Gatitos">Gatitos</Link>
                    </li>
                    <li className="Header-Nav-li">
                        <Link to="/MasGatitos">Mas Gatitos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}