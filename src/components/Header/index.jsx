import './index.css';
import { Link } from "react-router-dom";

export const Header = () =>{
    return(
        <header className="Header">
            <h1 className="Header-Title-">"Rick and Morty"</h1>
            <p className='Header-Paragraph'>Wubba Lubba Dub Dub!</p>
            <nav className="Header-Nav">
                <ul className='Header-Nav-Ul'>
                    <li className="Header-Nav-li">
                        <Link className='Header-Nav-a' to="/">Home🏠</Link>
                    </li>
                    <li className="Header-Nav-li">
                        <Link className='Header-Nav-a' to="/Gatitos">Women🐍</Link>
                    </li>
                    <li className="Header-Nav-li">
                        <Link className='Header-Nav-a' to="/MasGatitos">Men🤥</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}