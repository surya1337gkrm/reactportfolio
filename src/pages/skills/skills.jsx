import React, {Component} from "react";
//css
import "./skills.css";
//bootstrap imports

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//data
import {skills} from "./skills-data";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div id="skills" className="pt-3 pb-3">
        <h1 className="text-center font-details-b pb-4">TECHNICAL SKILLS</h1>
        <CardDeck>
          <Row className="d-flex justify-content-around">
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    FrontEnd
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.frontend.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Backend */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    BackEnd
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.backend.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* hosting services */}
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Hosting platforms
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.hostingPlatforms.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Programming Langauges */}
            <Col md={4}>
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Programming Langauges
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.programmingLanguages.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Databases */}
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Databases
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.databases.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
              {/* Version Control */}
              <Card className="focus mt-2 mb-2">
                <Card.Body>
                  <Card.Title className="text-center card-title">
                    Version Control
                  </Card.Title>
                  <hr />
                  <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {skills.versionControl.map((skill, index) => {
                      return (
                        <span className="p-2" key={`${skill.skillname}$index`}>
                          <a
                            className="text-dark text-decoration-none"
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={skill.imgSrc}
                              alt={skill.imgAltText}
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            {skill.skillName}
                          </a>
                        </span>
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </div>
    );
  }
}

export default Skills;
