import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const CardInformation = {
  1: {
    title: "Newspaper UI",
    description: "Trying to recreate a newspaper UI.",
    image: "https://imgs.search.brave.com/gGkg8K3BgUark6UWZhHPaLneipPLalWWYUphYFeZaW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aW50YWdlLW5l/d3NwYXBlci1ub3N0/YWxnaWEtY2xhc3Np/Yy1qb3VybmFsaXNt/LWNvbmNlcHRfMjcx/NDEwLTU5ODgwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    slug: "newspaper",
  },
  2: {
    title: "Ray Tracing Engine",
    description: "Building a ray tracing engine from scratch in C",
    image: "/blogs/images/plot_spheres_ch8.png",
    slug: "ray-tracer",
  },
  3: {
    title: "HuggingFace Embeded space",
    description: "This is the third prototype",
    image: "https://picsum.photos/seed/3/400/300",
    slug: "hugging-face-embed",
  },
  4: {
    title: "Prototype 4",
    description: "This is the fourth prototype",
    image: "https://picsum.photos/seed/4/400/300",
    slug: "prototype-4",
  },
  5: {
    title: "Prototype 5",
    description: "This is the fifth prototype",
    image: "https://picsum.photos/seed/5/400/300",
    slug: "prototype-5",
  },
  6: {
    title: "Prototype 6",
    description: "This is the sixth prototype",
    image: "https://picsum.photos/seed/6/400/300",
    slug: "prototype-6",
  },
  7: {
    title: "Prototype 7",
    description: "This is the seventh prototype",
    image: "https://picsum.photos/seed/7/400/300",
    slug: "prototype-7",
  },
};

const PrototypesPage = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div
            className="columns is-multiline is-variable is-3"
            style={{ margin: -0.75 + "rem" }}
          >
            {Object.values(CardInformation).map((card, index) => (
              <div
                key={index}
                className="column is-one-third"
                style={{ padding: 0.75 + "rem" }}
              >
                <StyledCard to={`/prototypes/${card.slug}`} className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={card.image} alt={card.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <StyledTitle className="title is-4">
                          {card.title}
                        </StyledTitle>
                        <p className="subtitle is-6 mt-2">{card.description}</p>
                      </div>
                    </div>
                    {/* <div className="content">{card.description}</div> */}
                  </div>
                </StyledCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrototypesPage;
