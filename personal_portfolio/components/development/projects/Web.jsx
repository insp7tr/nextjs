import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projects from "../../../utils/data";

import { ProjectCard } from "../../ProjectCard";

const NotUploaded = () => {
  return (
    <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
      Projects not uploaded yet.
    </p>
  );
};

export const Web = () => {
  return (
    <section className="py-20 px-0 realtive bg-black web" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="text-5xl font-bold text-center">Languages</h2>
              <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
                Select a language to see its relevant projects.
              </p>

              <Tab.Container id="web-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="bg-[#ffffff1a] overflow-hidden w-9/12 my-0 mx-auto rounded-2xl mb-5 justify-center items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="one"
                      className="bg-transparent rounded-t-3xl py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      HTML/CSS/JS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="two"
                      className="bg-transparent rounded-t-3xl py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      React
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="three"
                      className="bg-transparent rounded-t-3xl py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      NextJS
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="one">
                    <Row>
                      {projects["html_css_js"].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="two">
                    <Row>
                      {projects["react"].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <Row>
                      {projects["nextjs"].map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
