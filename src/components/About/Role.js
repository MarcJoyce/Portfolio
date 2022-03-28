import React, { useState } from "react";
import styled from "styled-components";

function Role({ role }) {
  const [activeChevron, setActiveChevron] = useState(false);

  const handleChevron = () => {
    setActiveChevron(!activeChevron);
  };

  return (
    <Container>
      <div onClick={handleChevron}>
        <div>
          <p>{role.startDate}</p>
          <h5>{role.role}</h5>
          <h6>{role.employer}</h6>
        </div>
        <img
          src="/assets/chevron.svg"
          alt="chevron"
          className={activeChevron ? "active" : ""}
        />
      </div>
      <ul className={activeChevron ? "active" : ""}>
        {role.responsibilities.map((responsibility, index) => {
          return <li key={responsibility}>{responsibility}</li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`

  margin: 25px; 0;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    div {
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    img {
      height: 25px;
      width: 25px;
      transform: rotate(90deg);
      cursor: pointer;
      transition: 0.3s all ease;
    }

    img.active {
      transform: rotate(270deg);
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
    max-height: 0;
    overflow: hidden;
    margin-top: 10px;
    padding: 0 2.5%;
    transition: 0.3s all ease;
    background-color: rgba(57, 143, 239,0.15);
    border-radius: 8px;
  }

  ul.active {
    max-height: 800px;
    padding: 1.25% 2.5%;
  }

    li, li > p {
      color: white;
      font-size: 14px;
      letter-spacing: 1.2px;
      font-weight: 200;
      padding: 5px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      :nth-child(1) {
        border-top: none;
      }
    }

    li > p > a {
      &:hover {
        color: white;
      }
    }

    a {
      color: #398fef;
    }

@media only screen and (max-width: 768px) {
  h5 {
  font-size: 20px;
  }

  h6 {
    font-size: 16px;
    margin-bottom: 10px;
  }

    li, a {
      font-size: 12px;
    }
}
  `;

export default Role;
