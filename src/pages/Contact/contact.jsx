import React, {Component} from "react";

//css
import "./contact.css";

//style
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">Let's Talk</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="mailto:suryavenkatesh0@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline-danger"
                    title="suryavenkatesh0@gmail.com"
                  >
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.linkedin.com/in/surya1337/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Visit my LinkedIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.facebook.com/suryavenkateshsv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-primary" title="Say hello on FB">
                    <i className="fab fa-facebook-square"></i> FaceBook
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://github.com/surya1337gkrm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a
                  href="https://bitbucket.org/surya1337"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-bitbucket"></i> BitBucket
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://www.instagram.com/surya__sv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-danger" title="My other projects">
                    <i className="fab fa-instagram"></i> Instagram
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="https://twitter.com/vijjanasurya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default Contact;
