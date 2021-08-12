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
        Check out my latest work
      </h4>
      </TitleContainer>
      <WorkContainer>
        {workItems.map((item, index) => {
          return (
            <WorkItem 
              key={index}
              title={item.title}
              heading={item.heading}
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
    margin-bottom: 20px;
  }
  h4 {
    font-size: 22px;
    font-weight: 300;
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
