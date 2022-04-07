import React from "react";
import styled from "styled-components";
import SocialIcon from "../Social/SocialIcon.js";
import Fade from 'react-reveal/Fade'

function Contact() {
  return (
    <Container id="contact">
      <Fade bottom>
      <h3>Contact Me</h3>
      <p>Feel free to drop me a message for a chat, or to discuss your project.</p>
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
      </Fade>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/assets/svgBackground.svg");
  padding: 100px 5%;

  h3 {
    font-size: 36px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    text-align: center;
    letter-spacing: 1.1px;
    max-width: 60%;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
      max-width: 100%;
    }
  }

  ul {
      margin: 25px;
      padding: 50px;
      width: 100%;
      display: flex;
      justify-content: center;

      li {
          background-color: #FFF;
          margin: 0 50px;
      }

      a svg{
          font-size: 76px;
          color: #000;
      }

      li:hover a svg {
          color: #398fef;
      }
  }

  @media only screen and (max-width: 768px) {
      ul {
          padding: 2%;
          width: 100%;
          margin: 5%;

          li {
              margin: 0 10px;
          }
      }
    ul a svg {
    font-size: 48px;
    }
    }
`;

export default Contact;
