import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'is-active' : '';
    };

    return (
        <nav className="navbar has-shadow is-white">
            <div className="navbar-brand px-3">
                <Link to="/" className="navbar-item">
                    <span className="is-size-4 has-text-weight-bold" style={{ letterSpacing: '1px' }}>
                        NishantBhansali
                    </span>
                </Link>
                <button className="navbar-burger" id="burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div className="navbar-menu" id="nav-links">
                <div className="navbar-end">
                    <Link to="/about" className={`navbar-item is-hoverable ${isActive('/about')}`}>Me</Link>
                    <Link to="/writings" className={`navbar-item ${isActive('/writings')}`}>Writing</Link>
                    <Link to="/prototypes" className={`navbar-item ${isActive('/prototypes')}`}>Portfolio</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;