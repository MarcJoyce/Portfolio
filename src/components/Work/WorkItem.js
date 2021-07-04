import React from "react";
import styled from "styled-components";

function WorkItem({title, image, heading, live, github}) {
  const Container = styled.div`
    width: 50%;
    min-height: 400px;
    margin: 50px 0;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    h4 {
      position: absolute;
      font-size: 24px;
      color: white;
      margin-left: 10%;
      z-index: 10;
    }

    p {
      position: absolute;
      font-size: 16px;
      color: white;
      font-style: italic;
      margin-left: 10%;
      transform: translateY(100%);
      z-index: 10;
    }

    &:hover > div:nth-child(1) {
      transform: scale(1.1);
    }
  }
`
const ImageContainer = styled.div`
  height: auto;
  min-height: 400px;
  width: 100%;
  position: absolute;
  background-image: url('${image}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 1s ease;

  span {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1;
  }  

}
`;

const LinkContainer = styled.div`
position: absolute;
width: 50%;
margin-left: 10%;
display: flex;

      a {
        font-size: 16px;
        color: white;
        font-style: italic;
        padding: 10px 20px;
        border: 1px solid white;
        transform: translateY(200%);
        z-index: 10;
        margin: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
  
        &:hover {
          background-color: white;
          color: black;
          box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.25);
        }
      }
`;

  return (
    <Container>
      <ImageContainer>
        <span></span>
      </ImageContainer>
        <h4>{title}</h4>
        <p>{heading}</p>
        <LinkContainer>
          <a href={live} rel="noreferrer" aria-label={title}>See Live</a>
          <a href={github} rel="noreferrer" aria-label={title}>Github Code</a>
        </LinkContainer>
    </Container>
  );
}

export default WorkItem;
