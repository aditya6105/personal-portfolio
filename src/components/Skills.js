import c from "../assets/img/skills-icon/c.svg";
import c2 from "../assets/img/skills-icon/c++.svg";
import java from "../assets/img/skills-icon/java-14.svg";
import python from "../assets/img/skills-icon/python-5.svg";
import html from "../assets/img/skills-icon/html-1.svg";
import css from "../assets/img/skills-icon/css-3.svg";
import js from "../assets/img/skills-icon/logo-javascript.svg";
import ts from "../assets/img/skills-icon/typescript.svg";
import reactjs from "../assets/img/skills-icon/react-2.svg";
import nodejs from "../assets/img/skills-icon/nodejs-1.svg";
import mongodb from "../assets/img/skills-icon/mongodb-icon-1.svg";
import postman from "../assets/img/skills-icon/postman.svg";
import sql from "../assets/img/skills-icon/mysql-logo-pure.svg";
import git from "../assets/img/skills-icon/git-icon.svg";
import fireb from "../assets/img/skills-icon/firebase-1.svg";
import blender from "../assets/img/skills-icon/blender-2.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Explore my technical skills and tools mastered over the years.
                <br />
                From programming languages to frameworks and development tools,
                these are the building blocks I use to bring ideas to life.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={c2} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={ts} alt="Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={reactjs} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={postman} alt="Image" />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={fireb} alt="Image" />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={blender} alt="Image" />
                  <h5>Blender</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
