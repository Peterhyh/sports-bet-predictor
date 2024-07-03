
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1>Bet Predictor</h1>
            <div className="navbar-buttons">
                <Link to="/">Home</Link>
                <Link to="/check">Check Player</Link>
            </div>
        </div>
    );
}

export default NavBar;