import React, { useState } from "react";
import styled from "styled-components";

function Role({ role }) {
  const [activeChevron, setActiveChevron] = useState(false);

  const handleChevron = () => {
    setActiveChevron((cur) => !cur);
  };

  return (
    <Container onClick={handleChevron}>
      <summary>
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
      </summary>
      <ul className={activeChevron ? "active" : ""}>
        {role.responsibilities.map((responsibility, index) => {
          return <li key={responsibility}>{responsibility}</li>;
        })}
      </ul>
    </Container>
  );
}

const Container = styled.details`

  margin: 25px; 0;

  summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    &::marker {
      display: none;
    }

    div {
      flex: 1;
      width: 100%;
    }

    img {
      position: absolute;
      right: 0;
      height: 25px;
      width: 25px;
      transform: rotate(90deg);
      margin-top: auto;
      margin-bottom: auto;

      &.active {
        transform: rotate(270deg);
      }
    }
  }
  
  h5 {
  font-size: 24px;
  font-weight: 600;
  color: #398fef;
  }

  h6 {
    font-size: 16px;
    font-style: italic;
    font-weight: 200;
    color: #FFFFFF;
    margin-bottom: 5px;
  }

  ul {
    margin-top: 10px;
    padding: 15px;
    border: 1px solid rgba(57, 143, 239, 0.4);
    border-radius: 8px;
  
    li, li > p {
      color: #FFFFFF;
      font-size: 12px;
      letter-spacing: 1.2px;
      font-weight: 300;
      padding: 7.5px 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);

      :nth-child(1) {
        border-top: none;
      }
    }

    li > p > a {
      &:hover {
        color: #FFFFFF;
      }
    }

    a {
      color: #398fef;
      font-weight: bold;
    }
  }


@media only screen and (max-width: 768px) {
  h5 {
  font-size: 20px;
  }

  h6 {
    margin-bottom: 10px;
  }
}
  `;

export default Role;
