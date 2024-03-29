import React from "react";
import styled from "styled-components";

import HeroCanvas from "../HeroCanvas/HeroCanvas";
import { HashLink as Link } from 'react-router-hash-link'

import { WORK_EXPERIENCE } from "../../constants/constants";

function Hero() {
  return (
    <Container id="hero">
      <HeroCanvas />
      <Background>
        {/* <div></div>
        <div></div> */}
      </Background>
      <Content>
        <h1>Marc Joyce</h1>

        <h2>{WORK_EXPERIENCE[0].role}</h2>

        <CallToAction>
          <Link to="/#contact" aria-label="contact me">
            <p>Let's chat</p>
          </Link>
        </CallToAction>
      </Content>

      <ToWork to="#work">
        <p>work</p>
      </ToWork>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  position: relative;

  canvas {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  div {
    position: absolute;
    width: 20vmin;
    height: 20vmin;
    background: linear-gradient(to bottom, #c84a22, #f3b94b);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  div:nth-child(1) {
    top: 22.5%;
    left: 60%;
  }

  div:nth-child(2) {
    top: 45%;
    left: 75%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  height: fit-content;
  left: 20%;
  transform: translateY(-50%);

  h1 {
    font-size: 15vmin;
    background: linear-gradient(to right, #1a237e, #3949ab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    font-weight: bold;
  }

  h2 {
    font-size: 5vmin;
    font-style: italic;
    color: white;
    font-weight: normal;
    margin-bottom: 40px;
  }
`;

const CallToAction = styled.div`
  display: flex;
  position: relative;

  a {
    padding: 10px 20px;
    background: linear-gradient(270deg, #3949ab, #1a237e);
    color: white;
    margin-right: 40px;
    font-size: 24px;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    min-width: 160px;

    &:hover {
      background: linear-gradient(270deg, #3959ab, #1a337e);
    }

    p {
      width: fit-content;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      padding: 5px 10px;
      font-size: 12px;
    }
  }
`;

const ToWork = styled(Link)`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 50px;
  left: 50%;
  transform: rotate(-45deg) translateX(-50%);
  border-left: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    transform: rotate(45deg) translateY(-100%);
    font-size: 12px;
    color: #f3f3f3;
  }

  &:hover {
    border-left: 1px solid white;
    border-bottom: 1px solid white;

    p {
      color: white;
    }
  }
`;

export default Hero;
