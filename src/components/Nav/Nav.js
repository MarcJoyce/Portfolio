import React from 'react'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade';

function Nav() {
  
  
  
  return (
    <Container>
      <Fade bottom>
        <a href="https://www.marcjoyce.com" aria-label="Marc Joyce website">
        <img src="/assets/logo.svg" alt="logo svg" />
      </a>        
      </Fade>
        <ul>
        <Fade bottom delay={100}><li><a href="#hero">Home</a></li></Fade>
        <Fade bottom delay={200}><li><a href="#work">Work</a></li></Fade>
        <Fade bottom delay={300}><li><a href="#about">About</a></li></Fade>
        <Fade bottom delay={400}><li className="contact"><a href="#contact">Contact</a></li></Fade>
      </ul>
    </Container>
  )
}

const Container = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: #1c1d25;
  z-index: 100;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

    img {
      width: 100px;
      height: 210px;
      transform: scale(0.3);
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      margin: 0 25px 0 25px;
    
    a {
      font-size: 20px;
      color: #F3F3F3;
      position: relative;
      padding: 5px 0;
    }

    a:hover {
      color: #398fef;
    }

    a:before {
      content: '';
      position: absolute;
      width: 90%;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      border-bottom: 2px solid #398fef;;
      opacity: 0;
      transition: all 0.3s ease;
    }

    a:hover:before {
      bottom: 0;
      opacity: 1;
    }
    }

    .contact a {
        padding: 10px 20px;
        background: linear-gradient(270deg,#3949AB,#1A237E);
        color: white;
        font-size: 1.25rem;
        cursor: pointer;
        position: relative; 
        transition: all 0.3s ease;
        border-radius: 8px;
      
      &:hover {
        background: linear-gradient(270deg,#3959AB,#1A337E);
        color: white;
      }

      &:hover:before {
        opacity: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 5%;  

    a {
      width: 50px;
    
      img {
        transform: scale(0.25);
      }
    }

    ul li {
      margin: 0 5px 0 5px;
    }

    ul li a, ul .contact a {
      font-size: 14px;
    }

    ul .contact a {
      font-size: 14px;
      color: white;
      background: none;
      padding: 5px 0;
    
    &:hover {
      color: #398fef;
      background: none;
    }

    &:hover:before {
      opacity: 1;
    }
    }
  }

  `;

export default Nav
 