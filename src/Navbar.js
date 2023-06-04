import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Leontina Gallery</h1>
            <h2>&nbsp;&nbsp;☼&nbsp;&nbsp;</h2>
            <h3>Aboriginal art of Australia</h3>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/artifacts/create">New Artifact</Link>
                <Link to="/exhibitions">Exhibitions</Link>
                <Link to="/users">Users</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;