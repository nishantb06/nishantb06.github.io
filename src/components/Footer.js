import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg', url: 'https://x.com/itsnishant14' },
        { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg', url: 'https://www.linkedin.com/in/nishantbhansali/' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg', url: 'https://github.com/nishantb06' },
        { name: 'Kaggle', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/kaggle.svg', url: 'https://www.kaggle.com/nishantbhansali' },
        { name: 'Gmail', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg', url: 'nbhansali06@gmail.com' },
    ];

    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <div className="columns is-centered">
                    <div className="column is-2">
                        <div className="is-flex is-flex-direction-column">
                            {socialLinks.map((link, index) => (
                                <a href={link.url} className="mb-4" key={index} aria-label={link.name}>
                                    <img src={link.icon} alt={link.name} width="24" height="24" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="column is-4">
                        <p className="has-text-left">
                            Nishant designs, builds, and operates machine learning systems that serve customers at scale.
                            He is currently a Machine Learning Engineering at Quizizz. Previously, he led
                            machine learning at Sharechat. He writes & speaks about machine learning,
                            LLMs, and engineering at [websiteName].
                        </p>
                        <p className="has-text-left mt-4">
                            © Nishant Bhansali • <Link to="/feedback">Feedback</Link> • <Link to="/rss">RSS</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;