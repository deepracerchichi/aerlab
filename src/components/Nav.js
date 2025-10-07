import './css/Nav.css';
import { Link } from 'react-router-dom';  // Add this import

function NavPrac() {
    return (
        <div>
        <nav className="nav-container">
            <Link to="/" className="nav-home">Home</Link>
            <Link to="/forecast" className="nav-forecast">Forecast</Link>
            <Link to="/about" className="nav-about">About</Link>
            <Link to="/practice" className="nav-practice">Practice</Link>
        </nav>
        <nav className="nav-search">
            <Link to="/search" className="nav-weather"> Search</Link>
        </nav>
        </div>

    )
}

export default NavPrac;