import React from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = ({ activeMenus, toggleMenu, blogSchema, activeSection }) => {
    const noBulletStyle = {
        listStyleType: 'none',
        paddingLeft: 0,
        marginLeft: 0,
        alignItems: 'left',
    };

    const generateId = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    };

    return (
        <aside className="menu sticky-toc">
            <p className="menu-label">Table of Contents</p>
            <ul className="menu-list" style={noBulletStyle}>
                {blogSchema.map((section, index) => {
                    const [sectionTitle, subheadings] = Object.entries(section)[0];
                    const sectionId = generateId(sectionTitle);
                    const isActive = activeSection === sectionId;
                    return (
                        <li key={index} style={noBulletStyle}>
                            <Link 
                                to={`#${sectionId}`} 
                                onClick={() => toggleMenu(sectionTitle)}
                                className={`toc-link ${isActive ? 'is-active' : ''}`}
                            >
                                {sectionTitle}
                                <span className="icon is-small is-pulled-right">
                                    <i className={`fas fa-angle-${activeMenus[sectionTitle] ? 'down' : 'left'}`}></i>
                                </span>
                            </Link>
                            {activeMenus[sectionTitle] && (
                                <ul style={noBulletStyle}>
                                    {subheadings.map((subheading, subIndex) => {
                                        const subheadingId = generateId(`${sectionTitle}-${subheading}`);
                                        const isSubActive = activeSection === subheadingId;
                                        return (
                                            <li key={subIndex} style={noBulletStyle}>
                                                <a 
                                                    href={`#${subheadingId}`}
                                                    className={`toc-link ${isSubActive ? 'is-active' : ''}`}
                                                >
                                                    {subheading}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default TableOfContents;