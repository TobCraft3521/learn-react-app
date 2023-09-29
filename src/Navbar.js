import { Link } from "react-router-dom";

const Navbar = ({handleAppearenceSwitch}) => {
    return (
        <nav className="navbar">
            <h1>Tobcrafts blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">New Blog</Link>
            </div>
            <label><img draggable={false} src="brightness-and-contrast.png" alt="dark/light mode" onClick={handleAppearenceSwitch} width="40px" height="40px" style={{ "background": "white", "borderRadius": "100%", "marginLeft": "20px", "cursor": "pointer" }} /></label>
        </nav>
    );
}

export default Navbar;