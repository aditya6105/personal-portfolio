import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-snips/mern-chatgpt-clone.png";
import projImg2 from "../assets/img/project-snips/tinder-clone.png";
import projImg3 from "../assets/img/project-snips/resume-builder.png";
import projImg4 from "../assets/img/project-snips/ai-chatbot.png";
import projImg5 from "../assets/img/project-snips/type-o-meter.png";
import projImg6 from "../assets/img/project-snips/news-api.png";
import projImg7 from "../assets/img/project-snips/collaborative-to-do-list.png";
import projImg8 from "../assets/img/project-snips/weather-api.png";
import projImg9 from "../assets/img/project-snips/HTML-CSS starter 2.png";
import projImg10 from "../assets/img/project-snips/tic-tac-toe.jpg";
import projImg11 from "../assets/img/project-snips/istockphoto-1370962549-612x612.jpg";
import projImg12 from "../assets/img/project-snips/istockphoto-1370962549-612x612.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsTab1 = [
    {
      title: "MERN Chatgpt Clone",
      description: "AI-powered chat application",
      imgUrl: projImg1,
    },
    {
      title: "Tinder Clone",
      description: "Swipe and chat based dating app clone",
      imgUrl: projImg2,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes easily",
      imgUrl: projImg3,
    },
    {
      title: "AI-Chatbot",
      description: "AI-powered conversational assistant",
      imgUrl: projImg4,
    },
    {
      title: "Type-o-meter",
      description: "Typing speed and accuracy test game",
      imgUrl: projImg5,
    },
    {
      title: "News Website",
      description: "Latest news and updates hub",
      imgUrl: projImg6,
    },
  ];

  const projectsTab2 = [
    {
      title: "Collaborative to-do list",
      description: "Shared task management for teams.",
      imgUrl: projImg7,
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting",
      imgUrl: projImg8,
    },
    {
      title: "HTML-CSS Starter",
      description: "Simple website showcasing basic HTML and CSS skills.",
      imgUrl: projImg9,
    },
    {
      title: "Tic-Tac-Toe",
      description: "Classic grid-based strategy game.",
      imgUrl: projImg10,
    },
    {
      title: "Coming Soon",
      description: "",
      imgUrl: projImg11,
    },
    {
      title: "Coming Soon",
      description: "",
      imgUrl: projImg12,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore some of the projects I’ve worked on, ranging from AI
                    applications to interactive web platforms.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Tab 1 */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2 */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3 */}
                      <Tab.Pane eventKey="third">
                        <p>
                          Future projects and experiments will be showcased
                          here. Stay tuned for more!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
