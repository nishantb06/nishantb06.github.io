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
                            {activeMenus[sectionTitle] && (
                                <ul style={noBulletStyle}>
                                    {subheadings.map((subheading, subIndex) => {
                                        const subheadingId = generateId(`${subheading}`);
                                        const isSubActive = activeSubSection === subheadingId;
                                        return (
                                            <li key={subIndex} style={noBulletStyle}>
                                                <a 
                                                    href={`#${subheadingId}`}
                                                    onClick={() => setActiveSubSection(subheadingId)}
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