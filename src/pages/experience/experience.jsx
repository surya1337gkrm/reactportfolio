import React, {Component} from "react";

//css
import "./experience.css";

//npm packages

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COGNIZANT from "../../assets/img/experience/cognizant.svg";
import L_Tredence from '../../assets/img/experience/L_Tredence.png'
import Tilt from "react-tilt";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{max: 10}}>
              <Card>
                <Card.Header
                  as="h4"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_Tredence}
                    alt="Tredence logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                     Software Engineer
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        ReactJS Developer
                      </strong>
                      <br />
                      <strong>Role:</strong> Developer & Production Support
                      <br />
                      
                      <strong>Technology:</strong> React, Redux and Javascript,ApexCharts,NodeJS
                      <br />
                      <strong>Duration:</strong> November 2020 - July 2021
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
        <Jumbotron className="jumbo-style">
          <Container>
            <Tilt options={{max: 10}}>
              <Card>
                <Card.Header
                  as="h4"
                  className="d-flex justify-content-center flex-wrap"
                >
                  <Card.Img
                    variant="top"
                    className="img-resize"
                    src={L_COGNIZANT}
                    alt="Cognizant logo"
                  />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                  <div>
                    <Card.Title className="text-center">
                      PROGRAMMER ANALYST
                    </Card.Title>
                  </div>
                  <div>
                    <Card.Text className="text-center style">
                      <strong className="body-title-style ">
                        ReactJS Developer
                      </strong>
                      <br />
                      <strong>Role:</strong> Developer & Production Support
                      <br />
                      
                      <strong>Technology:</strong> React, Redux and Javascript,Sitecore,Teamsite(CMS)
                      <br />
                      <strong>Duration:</strong> December 2018 - November 2020
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Tilt>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Experience;
