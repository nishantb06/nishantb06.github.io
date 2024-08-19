import React from 'react';
import { Link } from 'react-router-dom';
import meImage from '../assets/IMG_0840.jpg';
const HomePage = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <h2 className="title">
                        Hi, I'm Nishant, a Machine learning engineer
                    </h2>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-6">
                            <div className="card">
                                <div className="card-content">
                                    <h2 className="title">Who am I?</h2>
                                    <p>
                                        Hi, my name is Nishant Bhansali. I'm working as a Machine Learning Engineer at Sharechat, working remotely from
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
                                    <p>
                                        Contact me<br />
                                        Email - nishantbhansali80@gmail.com<br />
                                        Phone number - 9558428844
                                    </p>

                                    <h2 className="title mt-6">News</h2>
                                    <ul>
                                        <li>Bronze medal in Kaggle HubMap+HPA Medical Image Segmentation Competition (80/1175 participants). <Link to="#">Link</Link></li>
                                        <li>Survey Paper on Vision Transformers for Edge Devices</li>
                                    </ul>

                                    <h2 className="title mt-6">Why this blog?</h2>
                                    <p>
                                        This blog is just meant as a brain dump for the world to see. I am not going to refine the blogs here much as they are
                                        meant as a proof of work for myself over the years. Therefore if by any chance you find one of these blogs useful and
                                        would like to get in touch with me, please do so via twitter or mail! Would love to debate if I get anything wrong here
                                        as well.
                                    </p>
                                    <p>Thanks for spending your time on my blog!!</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={meImage} alt="Nishant Bhansali" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src={meImage} alt="Nishant Bhansali" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">Nishant Bhansali</p>
                                            <p className="subtitle is-6">@itsnishant14</p>
                                        </div>
                                    </div>
                    
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                                        iaculis mauris. <a href="https://bulma.io">@bulmaio</a>. <a href="#">#css</a>
                                        <a href="#">#responsive</a>
                                        <br />
                                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;