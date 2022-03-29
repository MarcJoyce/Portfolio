import React from "react";
import styled from "styled-components";

import LazyImage from './LazyImage'

import Fade from 'react-reveal/Fade'

function WorkItem({title, image, blurb, heading, live, github}) {

  return (
    <Fade bottom>
    <Container>
      <ImageContainer>
        <LazyImage 
            image={image}
            placeholder="assets/placeholder.png" 
            title={title}
          />
        <span></span>
      </ImageContainer>
        <h4>{title}</h4>
        <p>{heading}</p>
        <p>{blurb}</p>
        <LinkContainer>
          <a href={live} rel="noreferrer" aria-label={title} target={"_blank"}>See Live</a>
          <a href={github} rel="noreferrer" aria-label={title} target={"_blank"}>Github Code</a>
        </LinkContainer>
    </Container>
    </Fade>
  );
}

const Container = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    position: relative;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 75px 0;

    h4 {
      font-size: 24px;
      color: white;
      margin-left: 5%;
      z-index: 10;
    }

    p {
      font-size: 16px;
      color: white;
      font-style: italic;
      margin: 0 0 5% 5%;
      z-index: 10;
    }

    &:hover > div:nth-child(1) {
      transform: scale(1.1);
    }
  }
`
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 1s ease;

  span {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }  

}
`;

const LinkContainer = styled.div`
width: 100%;
margin-left: 5%;
display: flex;

      a {
        font-size: 12px;
        color: white;
        font-style: italic;
        padding: 10px 20px;
        border: 1px solid white;
        z-index: 10;
        margin: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: bold;
  
        &:hover {
          background-color: white;
          color: black;
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
        }
      }
`;

export default WorkItem;
