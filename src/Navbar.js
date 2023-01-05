import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Sci-Fi Blog</h1>
            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;