import React, { useState } from 'react';
import { Link } from "react-router-dom";

const PrototypesPage = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    return (
        <div>
            <h1>Prototypes</h1>
            <p>Coming soon...</p>
            <div className="container px-2">
                <aside className="menu">
                    <p className="menu-label">General</p>
                    <ul className="menu-list">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/customers">Customers</Link></li>
                    </ul>
                    <p className="menu-label">Administration</p>
                    <ul className="menu-list">
                        <li><Link to="/team-settings">Team Settings</Link></li>
                        <li>
                            <button 
                                onClick={() => toggleMenu('manage-team')} 
                                className={`button is-text ${activeMenu === 'manage-team' ? 'is-active' : ''}`}
                                aria-expanded={activeMenu === 'manage-team'}
                                aria-controls="manage-team-submenu"
                            >
                                Manage Your Team
                            </button>
                            <ul id="manage-team-submenu" className={activeMenu === 'manage-team' ? '' : 'is-hidden'}>
                                <li><Link to="/members">Members</Link></li>
                                <li><Link to="/plugins">Plugins</Link></li>
                                <li><Link to="/add-member">Add a member</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/invitations">Invitations</Link></li>
                        <li><Link to="/cloud-storage">Cloud Storage Environment Settings</Link></li>
                        <li><Link to="/authentication">Authentication</Link></li>
                    </ul>
                    <p className="menu-label">Transactions</p>
                    <ul className="menu-list">
                        <li><Link to="/payments">Payments</Link></li>
                        <li><Link to="/transfers">Transfers</Link></li>
                        <li><Link to="/balance">Balance</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default PrototypesPage;