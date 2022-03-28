import React from "react";
import styled from "styled-components";
import SocialIcon from "../Social/SocialIcon.js";

function Footer() {
  return (
    <Container id="contact">
      <Logo href="https://www.marcjoyce.com" aria-label="Marc Joyce Website">
        <img src="/assets/logo.svg" alt="Logo" />
      </Logo>
      <div>
        <p>Quick links</p>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>
            <a href="#">Fun</a>
          </li> */}
        </ul>
      </div>
      <div>
        <p>Get in touch</p>
        <ul>
          <li>
            <SocialIcon
              icon="linkedin"
              link="https://www.linkedin.com/in/marcjoyce501/"
            />
          </li>
          <li>
            <SocialIcon
              icon="github"
              link="https://www.github.com/MarcJoyce/"
            />
          </li>
          <li>
            <SocialIcon icon="email" link="mailto:marcjoyce90@googlemail.com" />
          </li>
        </ul>
      </div>
      <Copyright>© {new Date().getFullYear()} Marc Joyce</Copyright>
    </Container>
  );
}

const Container = styled.footer`
    position: relative;
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    background-color: #1c1d25;

    div {
      height: fit-content;
      width: 200px;

      p {
        font-size: 20px;
        color: white;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        width: fit-content;
      }
      
      ul {
        display: flex;
        flex-direction: column;

        li {
          margin: 5px 0;
        
          a {
            position: relative;
            color: #F3F3F3;
            font-size: 16px;
            transition: all 0.3s ease;
            padding: 5px 0;
          }

          a:hover {
            color: #398fef;
          }
        }
      }
    }

    @media only screen and (max-width: 768px) {
      div p {
        font-size: 16px;
      }
    }
  `;

const Logo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 210px;
    width: 100px;
  }

  @media only screen and (max-width: 768px) {
    img {
      transform: scale(0.5);
    }
  }
`;

const Copyright = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
`;

export default Footer;
