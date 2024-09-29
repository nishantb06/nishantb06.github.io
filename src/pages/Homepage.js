import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import meImage from '../assets/nandiHills.JPG';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const customTheme = {
  background: 'transparent',
  text: '#000',
  grade4: '#216e39',
  grade3: '#30a14e',
  grade2: '#40c463',
  grade1: '#9be9a8',
  grade0: '#ebedf0',
};

const HomePage = () => {
    const socialLinks = [
        { name: 'Twitter', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg', url: 'https://x.com/itsnishant14' },
        { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg', url: 'https://www.linkedin.com/in/nishantbhansali/' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg', url: 'https://github.com/nishantb06' },
        { name: 'Kaggle', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/kaggle.svg', url: 'https://www.kaggle.com/nishantbhansali' },
        { name: 'Gmail', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg', url: 'mailto:nbhansali06@gmail.com' },
    ];

    const memoizedGitHubCalendar = useMemo(() => (
        <GitHubCalendar username="nishantb06" theme={customTheme}>
            <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
    ), []); // Empty dependency array means this will only be created once

    return (
        <>
            
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-9">
                            <div className="card">
                                <div className="card-content">
                                    <h1 className="title is-3">Hi, I'm Nishant, a Machine learning engineer</h1>
                                    <p>
                                        I'm working as a Machine Learning Engineer at Sharechat, working remotely from
                                        Ahmedabad, India. I have majorly worked on solving Computer Vision and Digital Image Processing based problems, and
                                        that's where I would say my expertise lies. Be it recent transformer architectures or archaic Image processing
                                        algorithms, I have my hands dirtied by almost everything vision based. My work at Sharechat has been around Image
                                        Enhancement and Image Quality assessment.
                                    </p>
                                    <p>
                                        I love working on open source projects, having contributed to Pytorch Lightning and Pytorch Ignite in the past. I am
                                        deeply fascinated by deep learning systems also. Other than this I like to participate in Kaggle Competitions as it
                                        forces me to stay up to date with current trends in the industry. Rapid experimentation and deploying models in production
                                        are a few things that I am currently learning right now.
                                    </p>
                                    <p>
                                        I am a huge sports buff. Played Basketball for roughly 10 years and currently exploring surfing and Kick-boxing!
                                    </p>

                                    <h2 className="title mt-6">Why this blog?</h2>
                                    <p>
                                        This blog is just meant as a brain dump for the world to see. I am not going to refine the blogs here much as they are
                                        meant as a proof of work for myself over the years. Therefore if by any chance you find one of these blogs useful and
                                        would like to get in touch with me, please do so via twitter or mail! Would love to debate if I get anything wrong here
                                        as well.
                                    </p>
                                    <p>Thanks for spending your time on my blog!!</p>

                                    <h2 className="title mt-6">News</h2>
                                    <ul>
                                        <li>Bronze medal in Kaggle HubMap+HPA Medical Image Segmentation Competition (80/1175 participants). <Link to="#">Link</Link></li>
                                        <li>Survey Paper on Vision Transformers for Edge Devices</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={meImage} alt="Nishant Bhansali" />
                                    </figure>
                                </div>
                                <footer className="card-footer">
                                    {socialLinks.map((link, index) => (
                                        <a href={link.url} className="card-footer-item" key={index} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                                            <img src={link.icon} alt={link.name} width="24" height="24" />
                                        </a>
                                    ))}
                                </footer>
                            </div>
                            {memoizedGitHubCalendar}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;