import React, { useState } from 'react'
import styled from 'styled-components'


function Role({index, role}) {

  const [activeChevron, setActiveChevron] = useState(false);

  const handleChevron = () => {
    setActiveChevron(!activeChevron);
  }
  
  const Container = styled.div`

  margin: 25px; 0;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      flex-direction: column;
      align-items: flex-start;
    }

    img {
      height: 25px;
      width: 25px;
      transform: ${activeChevron ? 'rotate(270deg)' : 'rotate(90deg)'};
      cursor: pointer;
    }
  }
  
  h5 {
  font-size: 22px;
  font-weight: 600;
  color: #398fef;
  }

  h6 {
    font-size: 18px;
    font-style: italic;
    font-weight: 200;
    color: white;
    margin-bottom: 5px;
  }

  ul {
    height: ${activeChevron ? 'fit-content' : '0'};
    overflow: hidden;
    transition: all 0.3s ease;
  }

    li, a {
      color: white;
      font-size: 14px;
      letter-spacing: 1.2px;
      font-weight: 200;
    }

    a {
      color: #398fef;
    }

  `;

  
  return (
      <Container key={index}>
              <div>
              <div>
                <p>{role.startDate}</p>
                <h5>{role.role}</h5>
                <h6>{role.employer}</h6>
              </div>
                <img src="/assets/chevron.svg" alt="chevron" onClick={handleChevron}/>
              </div>
              <ul>
                {role.responsibilities.map((responsibility, index) => {
                  return (
                    <li key={index}>{responsibility}</li>
                  )
                })}
              </ul>
            </Container>
  )
}

export default Role
