import React from "react";
import styled from "styled-components";

import { WORK_EXPERIENCE } from '../../constants/constants'

import Role from './Role'

import Fade from 'react-reveal/Fade';

function About() {

    const work = WORK_EXPERIENCE;
  
  return (
    <Container id="about">
      <Fade bottom>
        <h3>All About Me</h3>
      <p>
        Hi, I'm <span>Marc</span>, a North-West UK based,{" "}
        <span>Web designer</span> and <span>Front-end Developer</span> focussed
        on creating clean and user-friendly experiences.
        <br />
        <br /> 
        I am <span>passionate</span> about building excellent software
        that <span>enhances the lives of those around me</span>, working with
        people to help them make their <span>dreams a reality</span>. When I'm
        not working, learning new technologies or working on a project; I'll be
        annoying my family with Star Wars memes, gaming (either Final Fantasy or
        Total War) and watching football.
      </p>
      <h4>Work</h4>
      <p>Here are some of my achievements throughout my career</p>
        {work.map((role) => {
          return (
            <Role 
              key={role.role}
              role={role}
            />
          )
      })}
      </Fade>
      {/* <p>
        My technology skills are aligned to Javascript, working with the MERN
        stack (MongoDB, Express.js, React.js and Node.js). My preference leans towards working on Front-end, taking advantage of the great utility and freedom that React gives, utilising the latest technologies within my work.
        <br />
        <br />
        I have experience working with different levels of stakeholder, from
        Senior Directors and Cabinet Office ministers, to junior team members
        providing mentorship and training. I drive continuous integration and
        improvement to deliver high value and quality products to the customer,
        utilising the best solution for each problem.
        <br />
        <br />I have held leadership responsibilities for the last 10 years,
        being accountable and responsible for delivery of management and
        operational reporting software and suites to improve performance and
        quality in each of my roles. I have developed members of my team through
        personal development plans and seen many of them progress into senior
        roles.
      </p> */}
    </Container>
  );
}

const Container = styled.section`
    min-height: 400px;
    padding: 100px 20%;
    background-color: #1c1d25;

    h3 {
      font-size: 36px;
      color: white;
      margin-bottom: 24px;
    }

    h4 {
      font-size: 24px;
      color: white;
      margin: 48px 0 24px;
    }

    p {
      color: white;
      font-size: 16px;
      letter-spacing: 1.1px;

      span {
        color: #398fef;
      }
    }
    ul {
      margin-bottom: 50px;
    }

    @media only screen and (max-width: 768px) {
      padding: 100px 5%;

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 16px;
      }

      p {
        font-size: 12px;
      }
    }
  `;

export default About;
