import React from 'react'
import styled from 'styled-components'

import WorkItem from './WorkItem'

import { WORK_ITEMS } from '../../constants/constants'

function Work() {
  const workItems = WORK_ITEMS;

  return (
    <Container id="work">
      <TitleContainer>
      <h3>
        Work
      </h3>
      <h4>
        Check out some of my work
      </h4>
      <p>
        Much of my career has been within the Public Sector and so evidence of my contributions to those organisations cannot be demonstrated for public viewing due to the nature of work completed. Below you can find a small collection of personal projects which demonstrate my skillset.
      </p>
      </TitleContainer>
      <WorkContainer>
        {workItems.map((item, index) => {
          return (
            <WorkItem 
              key={index}
              title={item.title}
              heading={item.heading}
              blurb={item.blurb}
              image={item.image} 
              live={item.websiteLink}
              github={item.githubRepo}             
            />   
          )
        })}
      </WorkContainer>
    </Container>
)
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
  `;

  const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
  }

  p {
    text-align: center;
    max-width: 75%;
  }

  h4 {
    font-size: 22px;
    font-weight: 300;
    margin: 40px 0;
  }
  `;

  const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
  `;

export default Work
