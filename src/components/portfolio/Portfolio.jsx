import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-1.png";
import IMG2 from "../../assets/portfolio-2.png";
import IMG3 from "../../assets/portfolio-3.png";
import IMG4 from "../../assets/portfolio-4.png";
import IMG5 from "../../assets/portfolio-5.png";
import IMG6 from "../../assets/portfolio-6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dashboard",
    github: "https://github.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dashboard",
    github: "https://github.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dashboard",
    github: "https://github.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Dashboard",
    github: "https://github.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Dashboard",
    github: "https://github.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Dashboard",
    github: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
