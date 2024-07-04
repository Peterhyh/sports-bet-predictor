
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Bet Predictor</h1>
            <div className="navbar-button-section">
                <Link className="navbar-button" to="/">Home</Link>
                <Link className="navbar-button" to="/check">Check Player</Link>
            </div>
        </div>
    );
}

export default NavBar;