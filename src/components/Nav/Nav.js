import React from 'react'
import styled from 'styled-components'

function Nav() {
  
  const Container = styled.header`
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  background-color: #1c1d25;
  z-index: 100;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

    img {
      transform: scale(0.3);
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      margin: 0 0 0 50px;
    
    a {
      font-size: 20px;
      color: #F3F3F3;
      position: relative;
      padding: 5px 0;
    }

    a:before {
      content: '';
      position: absolute;
      width: 90%;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      border-bottom: 2px solid #F3F3F3;
      opacity: 0;
      transition: all 0.3s ease;
    }

    a:hover:before {
      bottom: 0;
      opacity: 1;
    }
    }
  }
  `;
  
  return (
    <Container>
        <a href="https://www.marcjoyce.com" aria-label="Marc Joyce website">
          <img src="Portfolio/assets/logo.svg" alt="logo svg" />
        </a>        
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </Container>
  )
}

export default Nav
 