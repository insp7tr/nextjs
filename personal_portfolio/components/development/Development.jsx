import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import { Backend } from "./projects/Backend";
import { Mobile } from "./projects/Mobile";
import { Web } from "./projects/Web";
import { Desktop } from "./projects/Desktop";
import { Blockchain } from "./projects/Blockchain";
import { CrossPlatform } from "./projects/Cross_Platform";

const Development = () => {
  return (
    <section className="pt-14 px-0 relative development" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="bg-custom-gradient rounded-3xl py-16 px-5">
              <h2 className="text-5xl font-bold text-center">Projects</h2>
              <p className="text-gray-300 text-lg tracking-wider leading-6 mt-3 mx-auto mb-7 text-center w-7/12">
                Select a stack to see its relevant projects.
              </p>

              <Tab.Container id="stacks-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="bg-[#ffffff1a] overflow-hidden w-9/12 my-0 mx-auto rounded-2xl mb-5 justify-center items-center"
                  id="pills-tab"
                >
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="one"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Backend
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="two"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Blockchain
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="three"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Desktop
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="four"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Mobile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="five"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Cross-Platform
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="w-full sm:w-1/3">
                    <Nav.Link
                      eventKey="six"
                      className="bg-transparent rounded-none py-3 px-0 text-white w-full text-base tracking-wider font-medium relative transition text-center z-0"
                    >
                      Web
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="one">
                    <Backend />
                  </Tab.Pane>
                  <Tab.Pane eventKey="two">
                    <Blockchain />
                  </Tab.Pane>
                  <Tab.Pane eventKey="three">
                    <Desktop />
                  </Tab.Pane>
                  <Tab.Pane eventKey="four">
                    <Mobile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="five">
                    <CrossPlatform />
                  </Tab.Pane>
                  <Tab.Pane eventKey="six">
                    <Web />
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

export default Development;
