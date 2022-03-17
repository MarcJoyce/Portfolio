import React from 'react'
import styled from 'styled-components'

import HeroCanvas from '../HeroCanvas/HeroCanvas'


function Hero() {
  
  
  return (
    <Container id="hero">
      <HeroCanvas id="anim"/>
      <Background>
        <div></div>
        <div></div>
      </Background>
      <Content>
        <h1>
          Marc Joyce
        </h1>
        <h2> 
          Front-end Developer
        </h2>

        <CallToAction>
          <a href="#about" aria-label="about me">About Me</a>
        </CallToAction>

      </Content>

      <ToWork href="#work">
        <p>work</p>
      </ToWork>
    </Container>
  )
}

const Container = styled.section`
    height: 100vh;
    min-height: 100vh;
    width: 100%;
    position: relative;

    canvas:first-child {
      height: 100%;
      width: 100%;
      position: absolute;
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
      background: linear-gradient(to bottom, #C84A22, #F3B94B);
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
      background: linear-gradient(to right, #1A237E, #3949AB);
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
      background: linear-gradient(270deg,#3949AB,#1A237E);
      color: white;
      margin-right: 40px;
      font-size: 1.25rem;
      cursor: pointer;
      position: relative; 
      transition: all 0.3s ease;
      border-radius: 8px;
    
    &:hover {
      background: linear-gradient(270deg,#3959AB,#1A337E);
    }

    }
  `;
  
  const ToWork = styled.a`
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 50px;
    left: 50%;
    transform: rotate(-45deg) translateX(-50%);
    border-left: 1px solid #F3F3F3;
    border-bottom: 1px solid #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    p {
      transform: rotate(45deg) translateY(-100%);
      font-size: 12px;
      color: #F3F3F3;
    }

    &:hover {
      border-left: 1px solid white;
      border-bottom: 1px solid white;

      p {
        color: white;
      }
    }
  `;

export default Hero
