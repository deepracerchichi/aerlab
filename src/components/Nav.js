import './css/Nav.css';
import { Link } from 'react-router-dom';  // Add this import
import './assets/logo.png';

function NavPrac() {
    return (
        <div>
            <nav className="nav-container">
                <nav className='nav-logo'>
                    <img src={require('./assets/logo.png')} alt="Logo" className="logo-image" />
                </nav>
                <nav className="nav-bar">
                    <Link to="/" className="nav-home">Home</Link>
                    <Link to="/forecast" className="nav-forecast">Forecast</Link>
                    <Link to="/about" className="nav-about">About</Link>
                    <Link to="/practice" className="nav-practice">Practice</Link>
                </nav>
                <nav className="nav-search">
                    <input type="text" className="search-input" placeholder="Search city..." />
                </nav>
            </nav>
        </div>

    )
}

export default NavPrac;