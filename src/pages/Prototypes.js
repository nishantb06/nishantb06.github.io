import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledCard = styled(Link)`
  display: block;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  color: inherit;
  text-decoration: none;
`;

const StyledTitle = styled.p`
  transition: font-size 0.3s ease-in-out;
  &:hover {
    font-size: 1.25rem;
  }
`;

const PrototypesPage = () => {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-variable is-3" style={{ margin: -0.75 + 'rem' }}>
                        {[...Array(7)].map((_, index) => (
                            <div key={index} className="column is-one-third" style={{ padding: 0.75 + 'rem' }}>
                                <StyledCard to={`/prototypes/${index + 1}`} className="card">
                                    <div className="card-image">
                                        <figure className="image is-4by3">
                                            <img src={`https://picsum.photos/seed/${index}/400/300`} alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <StyledTitle className="title is-4">Prototype {index + 1}</StyledTitle>
                                                <p className="subtitle is-6">Subtitle</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Phasellus nec iaculis mauris.
                                        </div>
                                    </div>
                                </StyledCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PrototypesPage;