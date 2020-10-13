import React from "react";

import "./App.css";

import NavBar from "./components/navBar/navBar";
import CarouselP from "./components/carousel/Carousel";
import TitleMessage from "./components/titleMessage/titleMessage";
import About from "./pages/about/about";

import Fade from "react-reveal";
import Slide from "react-reveal/Slide";
import {Parallax} from "react-parallax";
import Container from "react-bootstrap/Container";
import Skills from "./pages/skills/skills";
import Experience from "./pages/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./pages/Contact/contact";

const App = () => {
  return (
    <div className="App" style={{position: "relative"}}>
      <CarouselP />
      <TitleMessage />
      <NavBar />
      <div>
        <Parallax
          blur={{min: -30, max: 30}}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Slide duration={500}>
            <Skills />
          </Slide>
        </Container>
      </div>
      <hr />
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Experience />
          </Fade>
        </Container>
      </div>
      <hr />
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Projects />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Contact />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;
