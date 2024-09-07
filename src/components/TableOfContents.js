import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableOfContents = ({ activeMenus, toggleMenu, blogSchema, activeSection }) => {
    const [activeSubSection, setActiveSubSection] = useState('');

    const noBulletStyle = {
        listStyleType: 'none',
        paddingLeft: 0,
        marginLeft: 0,
        alignItems: 'left',
    };

    const generateId = (text) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    };

    const renderSubheadings = (subheadings, parentId = '', level = 0) => {
        if (!Array.isArray(subheadings)) {
            subheadings = [subheadings];
        }

        return (
            <ul style={{
                ...noBulletStyle,
                marginLeft: level > 0 ? `${level * 15}px` : '0',  // Add left margin for nested levels
                paddingLeft: 0,  // Remove padding
            }}>
                {subheadings.map((subheading, index) => {
                    if (typeof subheading === 'string') {
                        const subheadingId = generateId(`${parentId}${subheading}`);
                        const isSubActive = activeSubSection === subheadingId;
                        return (
                            <li key={index} style={noBulletStyle}>
                                <a 
                                    href={`#${subheadingId}`}
                                    onClick={() => setActiveSubSection(subheadingId)}
                                    className={`toc-link ${isSubActive ? 'is-active' : ''}`}
                                >
                                    {subheading}
                                </a>
                            </li>
                        );
                    } else if (typeof subheading === 'object') {
                        const [subSubheadingTitle, subSubheadings] = Object.entries(subheading)[0];
                        const subSubheadingId = generateId(`${parentId}${subSubheadingTitle}`);
                        const isSubSubActive = activeSubSection === subSubheadingId;
                        return (
                            <li key={index} style={noBulletStyle}>
                                <a 
                                    href={`#${subSubheadingId}`}
                                    onClick={() => {
                                        setActiveSubSection(subSubheadingId);
                                        toggleMenu(subSubheadingTitle);
                                    }}
                                    className={`toc-link ${isSubSubActive ? 'is-active' : ''}`}
                                >
                                    {subSubheadingTitle}
                                    <span className="icon is-small is-pulled-right">
                                        <i className={`fas fa-angle-${activeMenus[subSubheadingTitle] ? 'down' : 'left'}`}></i>
                                    </span>
                                </a>
                                {activeMenus[subSubheadingTitle] && renderSubheadings(subSubheadings, `${subSubheadingId}-`, level + 1)}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2, h3, h4');
            let currentActiveSection = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 100) {
                    currentActiveSection = section.id;
                }
            });
            setActiveSubSection(currentActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                                onClick={() => {
                                    toggleMenu(sectionTitle);
                                    setActiveSubSection(sectionId);
                                }}
                                className={`toc-link ${isActive ? 'is-active' : ''}`}
                            >
                                {sectionTitle}
                                <span className="icon is-small is-pulled-right">
                                    <i className={`fas fa-angle-${activeMenus[sectionTitle] ? 'down' : 'left'}`}></i>
                                </span>
                            </Link>
                            {activeMenus[sectionTitle] && renderSubheadings(subheadings, `${sectionId}-`)}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default TableOfContents;