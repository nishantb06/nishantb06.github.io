import React from 'react';

const TableOfContents = ({ activeMenus, toggleMenu }) => {
    const noBulletStyle = {
        listStyleType: 'none',
        paddingLeft: 0,
        alignItems: 'left',
    };

    return (
        <aside className="menu">
            <p className="menu-label">Table of Contents</p>
            <ul className="menu-list" style={noBulletStyle}>
                {['Introduction', 'Main Content', 'Conclusion'].map((section) => (
                    <li key={section}>
                        <button 
                            onClick={() => toggleMenu(section)} 
                            className={`button is-text ${activeMenus[section] ? 'is-active' : ''}`}
                            aria-expanded={activeMenus[section]}
                            aria-controls={`${section.toLowerCase()}-submenu`}
                        >
                            {section}
                        </button>
                        <ul className={activeMenus[section] ? '' : 'is-hidden'} style={noBulletStyle}>
                            <li><a href={`#subheading${section.charAt(0)}-1`}>Subheading {section.charAt(0)}.1</a></li>
                            <li><a href={`#subheading${section.charAt(0)}-2`}>Subheading {section.charAt(0)}.2</a></li>
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default TableOfContents;