import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

//image
import Profile from '../../assets/img/profile/profile.jpg';
//styles
import './about.css';

class About extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        <div className='about'>
          <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
          <Container>
            <Row className='pt-3 pb-5 align-items-center'>
              <Col xs={12} md={6}>
                <Row className='justify-content-center mb-2 mr-2'>
                  <Image
                    className='profile justify-content-end'
                    alt='profile'
                    src={Profile}
                    thumbnail
                    fluid
                    // style={{height: "200px", width: "200px"}}
                  />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=' align-items-start p-2 my-details rounded'>
                  <p>
                    Hi There! I am <strong>Surya Venkatesh Vijjana</strong>
                  </p>
                  <br />
                  <p>
                    A Computer Science Enthusiast and a FrontEnd developer with
                    strong UI developing skills having 2+ years of experience in
                    building high- performance presentation layers, building
                    reusable components using{' '}
                    <strong>JavaScript frameworks</strong>.
                  </p>
                  <p>
                    I love learning about new technologies, what problems are
                    they solving and How can I use them to build better and
                    scalable products.
                  </p>
                </Row>
                <br />
                <Row>
                  <Col className='d-flex justify-content-center flex-wrap'>
                    <div>
                      <a href='#contact'>
                        <Button className='m-2' variant='outline-primary'>
                          Let's talk
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href='https://drive.google.com/file/d/1-Tk7dQMHJQDupNv1S3xkJbeACw1WuZbf/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Button className='m-2' variant='outline-success'>
                          My Resume
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href='https://github.com/surya1337gkrm'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Button className='m-2' variant='outline-dark'>
                          GitHub
                        </Button>
                      </a>
                    </div>
                    <div>
                      <a
                        href='https://www.linkedin.com/in/surya1337/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Button className='m-2' variant='outline-info'>
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
