import React, {Component} from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_ReactBreakingBad from "../../assets/img/projects/L_ReactBreakingBad.png";
import L_Youtube from "../../assets/img/projects/L_Youtube.png";
import L_MovieDB from "../../assets/img/projects/L_MovieDB.png";
import L_Netflix from "../../assets/img/projects/L_Netflix.png";

import "./projects.css";
import Image from "react-bootstrap/Image";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    BreakingBad App
                  </Card.Title>
                  <Image
                    src={L_ReactBreakingBad}
                    alt="BreakingBad App"
                    rounded
                    className="image-style1 m-1"
                  ></Image>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> A Web app where we can
                          get details about the characters of Popular Tv Series{" "}
                          <strong>Breaking Bad</strong>.
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML5</span>
                            </li>
                            <li>
                              <span className="p-2">CSS3</span>
                            </li>
                            <li>
                              <span className="p-2">Javascript</span>
                            </li>
                            <li>
                              <span className="p-2">React</span>
                            </li>
                            <li>
                              <span className="p-2">BreakingBad API</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a
                      href="https://react-breakingbad-lup60pjeo.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        See Live
                      </Button>
                    </a>
                    <a
                      href="https://bitbucket.org/surya1337/react_breakingbad/src/master/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Source Code
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Youtube Search Implementation ( UI )
                  </Card.Title>
                  <Image
                    src={L_Youtube}
                    alt="Youtube UI"
                    rounded
                    className="image-style1 m-1"
                  ></Image>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> A Web app where we can
                          search for videos and gets the data from Youtube API.
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML5</span>
                            </li>
                            <li>
                              <span className="p-2">CSS3</span>
                            </li>
                            <li>
                              <span className="p-2">React</span>
                            </li>
                            <li>
                              <span className="p-2">React Hooks</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a
                      href="https://video-hooks-2mvkzevqg.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        See Live
                      </Button>
                    </a>
                    <a
                      href="https://github.com/surya1337gkrm/HooksYT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Source Code
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Movie DB
                  </Card.Title>
                  <Image
                    src={L_MovieDB}
                    alt="Movie DB"
                    rounded
                    className="image-style1 m-1"
                  ></Image>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> A IMDB Clone Web app
                          where we can search for movies/TV shows and can get
                          the full details from OMDB API.
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML5</span>
                            </li>
                            <li>
                              <span className="p-2">CSS3</span>
                            </li>
                            <li>
                              <span className="p-2">React</span>
                            </li>
                            <li>
                              <span className="p-2">React Redux</span>
                            </li>
                            <li>
                              <span className="p-2">React Router DOM</span>
                            </li>
                            <li>
                              <span className="p-2">Bootstrap</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a
                      href="https://movie-db-n19tb7gxo.vercel.app/#/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        See Live
                      </Button>
                    </a>
                    <a
                      href="https://github.com/surya1337gkrm/MovieDB"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Source Code
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Netflix Clone
                  </Card.Title>
                  <Image
                    src={L_Netflix}
                    alt="Netflix"
                    rounded
                    className="image-style1 m-1"
                  ></Image>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> A Netflix clone web App
                          made using React.
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">HTML5</span>
                            </li>
                            <li>
                              <span className="p-2">CSS3</span>
                            </li>
                            <li>
                              <span className="p-2">React</span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    <a
                      href="https://surya1337gkrm.github.io/netflix-clone/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        See Live
                      </Button>
                    </a>
                    <a
                      href="https://github.com/surya1337gkrm/netflix-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-primary">
                        Source Code
                      </Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <hr />
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
