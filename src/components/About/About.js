import React from "react";
import styled from "styled-components";

function About() {
  const Container = styled.section`
    min-height: 400px;
    padding: 200px 20%;

    h3 {
      font-size: 48px;
      color: white;
      margin-bottom: 24px;
    }

    h4 {
      font-size: 36px;
      color: white;
      margin: 48px 0 24px;
    }

    p {
      color: white;
      font-size: 20px;
      letter-spacing: 1.1px;

      span {
        color: #398fef;
      }
    }
    ul {
      margin-bottom: 50px;
    }
  `;

  const Role = styled.div`

  margin: 25px; 0;
  
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
    <Container id="about">
      <h3>All About Me</h3>
      <p>
        Hi, I'm <span>Marc</span>, a North-West UK based,{" "}
        <span>Web designer</span> and <span>Front-end Developer</span> focussed
        on creating clean and user-friendly experiences.
        <br />
        <br /> I am <span>passionate</span> about building excellent software
        that <span>enhances the lives of those around me</span>, working with
        people to help them make their <span>dreams a reality</span>. When I'm
        not working, learning new technologies or working on a project; I'll be
        annoying my family with Star Wars memes, gaming (either Final Fantasy or
        Total War) and watching football.
      </p>
      <h4>Work</h4>
      <ul>
        <Role>
          <p>Apr 2020</p>
          <h5>Informatics Leadership Team</h5>
          <h6>Manchester University NHS Foundation Trust (MFT)</h6>
          <ul>
            <li>Leadership responsibility for 12 developers,</li>
            <li>
              Designed and created a React CRUD application for scheduling
              statutory and regular activities (52k per year) integrating KPI
              and SLA management and incident reporting,
            </li>
            <li>
              Transformed COVID19 reporting process from completely manual to
              automated solution, decreasing the resource requirement by 50%
            </li>
          </ul>
        </Role>
        <Role>
          <p>Aug 2019</p>
          <h5>Developer</h5>
          <ul>
            <li>
              Father and Son The Karaoke Kings - Website created for a
              father and son musical duo who planned to tackle lockdown in the
              UK by entertaining thousands across the globe. 
              <a
                href="https://www.fatherandsonthekaraokekings.com"
                target="_blank"
                aria-label="Father and Son the Karaoke Kings"
                rel="noreferrer">
                Visit Website here
              </a>
            </li>
            <li>
              The Little Bakery - Bakery website for local family run
              business. 
              <a
                href="https://www.thelittebakerythornton.com"
                target="_blank"
                aria-label=""
                rel="noreferrer">
                Visit Website here
              </a>
            </li>
            <li>
              Barbershop at the Mill - Website created for local barbershop. 
              <a
                href="https://www.barbershopatthemill.com"
                target="_blank"
                aria-label=""
                rel="noreferrer">
                Visit Website here
              </a>
            </li>
            <li>
              Website - KR Photography - Redesign of website for local
              Photography studio. 
              <a
                href=""
                target="_blank"
                aria-label="resign of website"
                rel="noreferrer">
                Visit the Website here
              </a>
            </li>
          </ul>
        </Role>
        <Role>
          <p>May 2019</p>
          <h5>Head of Function</h5>
          <h6>MyCSP ltd</h6>
          <ul>
            <li>
              Leader for multi-functional teams including Pension
              Administration, Continuous Improvement and Development teams
              totalling 120+ team members,
            </li>
            <li>
              Created self service suite of reporting function using React and
              data visualization libraries,
            </li>
            <li>
              Achieved 99% delivery of annual statement production, increase of
              4% on previous year,
            </li>
            <li>
              Project manager for Pension rectification of over 300,000
              pensioners.
            </li>
          </ul>
        </Role>
        <Role>
          <p>Aug 2017</p>
          <h5>Project Manager (Operational)</h5>
          <h6>MyCSP ltd</h6>
          <ul>
            <li>
              Project Manager for Pension Annual Events and leadership for team
              of developers,
            </li>
            <li>
              Developed internal SLA management process for development team and
              introduced agile methodologies,
            </li>
            <li>
              Created a Pension calculations system using React front-end and
              vanilla javascript back-end, taking input from users to perform
              complex calculations, meeting compliance regulations.
            </li>
            <li>
              Implemented career development programmes to enhance staff skills.
            </li>
          </ul>
        </Role>
        <Role>
          <p>Nov 08 - Aug 17</p>
          <h5>Workforce Planning Manager</h5>
          <h6>NHS Business Services Authority</h6>
          <ul>
            <li>
              Leader for a group of developers, delivering Service Management
              software across multiple departments (300+ team members),
              including performance tracking software, time management software
              and capacity and planning software for management.
            </li>
            <li>
              Tools used were most React, with some simpler tools created using
              vanilla HTML/CSS & Javascript,
            </li>
            <li>
              Accountable for capacity management and planning intra-day
              activities across large teams of Pension Administrators
            </li>
            <li>
              Responsible for metric reporting across the Pensions department,
              acting as the contact point between NHS Pensions and the
              Department of Health
            </li>
            <li>
              Absorbed Team Leadership responsibilities for a Pension
              Administration team (20 staff) for Quotation production. Within 3
              months, improved turnaround times from 90 days to 3 days,
              implemented development plans to negate skills gaps, reduced
              resourcing requirement by 15% and improved accuracy to compliance
              legislation
            </li>
            <li>
              Realigned the 15% resource reduction into profit generation
              activities, generating 300k per year from additional activity
            </li>
          </ul>
        </Role>
      </ul>
      <p>
        My technology skills are aligned to Javascript, working with the MERN
        stack (MongoDB, Express.js, React.js and Node.js). My preference leans towards working on Front-end, taking advantage of the great utility and freedom that React gives, utilising the latest technologies within my work.
        <br />
        <br />
        I have experience working with different levels of Stakeholder, from
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
      </p>
    </Container>
  );
}

export default About;
