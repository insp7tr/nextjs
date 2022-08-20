import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../../ProjectCard";
import projects from "../../../utils/data";

const NotUploaded = () => {
  return (
    <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
      Projects not uploaded yet.
    </p>
  );
};

export const Backend = () => {
  return (
    <section className="py-20 px-0 realtive bg-black backend" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2 className="text-5xl font-bold text-center">Languages</h2>
              <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
                Select a language to see its relevant projects.
              </p>

              <Tab.Container id="backend-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="bg-[#ffffff1a] overflow-hidden w-9/12 my-0 mx-auto rounded-2xl mb-5 justify-center items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="w-1/2 sm:w-1/3">
                    <Nav.Link
                      eventKey="one"
                      className="bg-transparent rounded-t-3xl py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      GoLang
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-1/2 sm:w-1/3">
                    <Nav.Link
                      eventKey="two"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      NodeJS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="three"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      NodeJS+NestJS
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="one">
                    <Row>
                      {projects["golang"].map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="two">
                    <NotUploaded />
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <NotUploaded />
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
