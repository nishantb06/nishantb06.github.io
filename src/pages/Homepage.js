import React, { useMemo, useState } from 'react';
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

    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        const scriptURL = 'https://script.google.com/macros/s/AKfycby7XWCzbfpWjKyeSOlrNNTYigINF_RKe_c3opZUY2pn3sP683o2OvOFNXeTRju0QutZ/exec'; // Replace with your deployed script URL

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'email': email
                })
            });

            setEmail('');
            setSubmitMessage('Thank you for subscribing!');
        } catch (error) {
            console.error('Error!', error.message);
            setSubmitMessage('Oops! Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                        I'm working as a Machine Learning Engineer at Quizizz, Bengluru, India. Before this I was a part of Sharechat, where I majorly worked on solving Computer Vision and Digital Image Processing based problems, and
                                        that's where I would say my expertise lies. Be it recent transformer architectures or archaic Image processing
                                        algorithms, I have my hands dirtied by almost everything vision based. My work at Sharechat has been around Image
                                        Enhancement and Image Quality assessment.
                                    </p>
                                    <p>
                                        I love working on open source projects, having contributed to Pytorch Lightning and Pytorch Ignite in the past. I am
                                        deeply fascinated by deep learning systems also. Over the years, I would say my expertise lies in building end to end ML systems.
                                        I have been fortunate enought to train Computer Vision models, write pipelines and actively maintain them, which are now catering to the 300M userbase of Sharechat.
                                        I think of myself as an ML Generalist, capable of working on backend (Python, Go , Javascript), frontend (React) and ML (Pytorch), Cloud (AWS, GCP) and DevOps. 
                                    </p>
                                    <p>
                                        Proud of this blog I wrote a while back, have a look! <a href="https://nishantbhansali.com/writings/blogs/the-annotated-llama">The Annotated Llama</a>
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
                                        <li>Started working at Quizizz @15th July 2024</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="card mb-4">
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

                            {/* New email subscription box */}
                            <div className="card mb-4">
                                <div className="card-content">
                                    <h3 className="title is-5">Get Notified</h3>
                                    <p className="subtitle is-6 mb-3">Stay updated with new blog posts!</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="field">
                                            <div className="control">
                                                <input 
                                                    className="input" 
                                                    type="email" 
                                                    placeholder="Your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <button 
                                                    className={`button is-info is-inverted is-light is-fullwidth ${isSubmitting ? 'is-loading' : ''}`} 
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    {submitMessage && (
                                        <p className={`mt-2 has-text-${submitMessage.includes('Oops') ? 'danger' : 'success'}`}>
                                            {submitMessage}
                                        </p>
                                    )}
                                </div>
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