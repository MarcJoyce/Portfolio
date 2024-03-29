import { HashLink as Link } from "react-router-hash-link";

export const WORK_ITEMS = [
  {
    title: 'Hey Pharmacist',
    heading: 'Hey Pharmacist website',
    role: 'Senior Software Engineer',
    blurb: 'Software Engineer for creation and maintenance of full stack',
    websiteLink: 'https://www.heypharmacist.co.uk/',
    subTitle: '',
    image: '/assets/heypharmacist.webp'
  },
  {
    title: "UAccount",
    heading: "uAccount online bank Website - Closed from May 22",
    role: "Frontend Engineer",
    blurb: "Frontend Engineer for all frontend maintenance",
    // githubRepo: "https://github.com/MarcJoyce/SWGProfessionCalculator",
    websiteLink: "https://www.uaccount.uk/",
    subTitle: "",
    image: "/assets/uAccountImage.webp",
  },
  {
    title: "DotDot Loans",
    heading: "DotDot Loans website",
    role: "Frontend Engineer",
    blurb: "Frontend Engineer for creation and maintenance of webpages",
    // githubRepo: "https://github.com/MarcJoyce/SWGProfessionCalculator",
    websiteLink: "https://www.dotdotloans.co.uk/",
    subTitle: "",
    image: "/assets/DotDotLoansImage.webp",
  },
  {
    title: "Morses Club",
    heading: "Morses Club website",
    role: "Frontend Engineer",
    blurb: "Frontend Engineer for creation and maintenance of webpages",
    // githubRepo: "https://github.com/MarcJoyce/SWGProfessionCalculator",
    websiteLink: "https://www.morsesclub.com/",
    subTitle: "",
    image: "/assets/MorsesImage.webp",
  },
  {
    title: "SWG Profession Calculator",
    heading: "MMO Online tool for Character Template",
    role: "Developer",
    blurb: "Profession calculator for Star Wars MMO",
    githubRepo: "https://github.com/MarcJoyce/SWGProfessionCalculator",
    websiteLink: "https://marcjoyce.github.io/SWGProfessionCalculator/",
    subTitle: "",
    image: "/assets/SWGImage.webp",
  },
  {
    title: "SWG Utility Calculators",
    heading: "MMO Online calculators for SWG",
    role: "Developer",
    blurb: "",
    githubRepo: "https://github.com/MarcJoyce/Portfolio",
    websiteLink: "https://www.marcjoyce.com/#/SWG/",
    subTitle: "",
    image: "/assets/SWGUtils.webp",
  },
  {
    title: "Father and Son The Karaoke Kings",
    heading: "Musical duo website",
    role: "Designer / Developer",
    blurb: "Website decommissioned Sept 2021",
    githubRepo: "https://github.com/MarcJoyce/Father-and-Son-Karaoke",
    websiteLink: "https://marcjoyce.github.io/Father-and-Son-Karaoke/",
    subTitle: "",
    image: "/assets/faskImage.webp",
  },
  // {
  //   title: "MERN Memories project",
  //   heading: "Social Media clone project",
  //   role: "Side project",
  //   blurb: "Built using MERN stack and hosted via Heroku and Github Pages",
  //   githubRepo: "https://github.com/MarcJoyce/MERN-Project",
  //   websiteLink: "https://marcjoyce.github.io/MERN-Project/",
  //   subTitle: "",
  //   image: "/assets/memories/image.webp",
  // },
  {
    title: "Disney Plus",
    heading: "Clone of Disney Plus Application",
    role: "Side project",
    blurb: "Build using MERN stack and hosted via Firebase",
    githubRepo: "https://github.com/MarcJoyce/disney-plus-clone",
    websiteLink: "https://disneyplusclone-c8834.web.app/",
    subTitle: "",
    image: "/assets/DisneyImage.webp",
  },
  // {
  //   title: "Amazon Website",
  //   heading: "Clone of Amazon",
  //   role: "Side project",
  //   blurb: "",
  //   githubRepo: "https://github.com/MarcJoyce/Amazon-Clone",
  //   websiteLink: "https://marcjoyce.github.io/Amazon-Clone/",
  //   subTitle: "",
  //   image: "/assets/amazon/image.webp",
  // }
];

export const WORK_EXPERIENCE = [
  {
    startDate: 'Oct 2022',
    role: 'Senior Software Engineer',
    employer: 'Numark Digital',
    responsibilities: [
      'Develop reports dashboard for pharmacies to view their customers current and historic ordering',
      'Streamlined continuous integration pipelines adding audit and validation',
    ]
  },
  {
    startDate: 'Oct 2021',
    role: 'Senior Frontend Engineer',
    employer: 'Morses Club',
    responsibilities: [
      'Transitioned legacy PHP front end code into React',
      'Streamlined front end production deployment through webpack bundling and gulp task automation',
      'Redeveloped user dashboard to comply with financial banking legislation',
      <p>
        Creation and maintenance of Morses externally facing websites inc{' '}
        <a href='https://www.uaccount.uk/'>UAccount</a>,{' '}
        <a href='https://www.dotdotloans.co.uk/'>DotDotLoans</a> and{' '}
        <a href='https://www.morsesclub.com/'>Morses Club</a>
      </p>,
      'Created automated solution for customers to handle their finances, reducing Operations overhead and improving customer service'
    ]
  },
  {
    startDate: 'Apr 2020',
    role: 'Informatics Leadership Team',
    employer: 'Manchester University NHS Foundation Trust (MFT)',
    responsibilities: [
      'Leadership responsibility for 12 developers',
      'Designed and created a React CRUD application for scheduling statutory and regular activities (52k per year) integrating KPI and SLA management and incident reporting',
      'Transformed COVID19 reporting process from completely manual to automated solution, decreasing the resource requirement by 50%'
    ]
  },
  {
    startDate: 'Aug 2019',
    role: 'Developer',
    employer: <p>Available to talk; <Link to="/#contact">Get in touch</Link> to discuss your project</p>,
    responsibilities: [
      'Father and Son The Karaoke Kings - Website created for a father and son musical duo who planned to tackle lockdown in the UK by entertaining thousands across the globe',
      'The Little Bakery - Bakery website for local family run business',
      'Barbershop at the Mill - Website created for local barbershop',
      'KR Photography - Redesign of website for local Photography studio'
    ]
  },
  {
    startDate: 'May 2019',
    role: 'Head of Function',
    employer: 'MyCSP ltd',
    responsibilities: [
      'Leader for multi-functional teams including Pension Administration, Continuous Improvement and Development teams totalling 120+ team members',
      'Created self service suite of reporting function using React and data visualization libraries',
      'Achieved 99% delivery of annual statement production, increase of 4% on previous year',
      'Project manager for Pension rectification of over 300,000 pensioners'
    ]
  },
  {
    startDate: 'Aug 2017',
    role: 'Project Manager (Operational)',
    employer: 'MyCSP ltd',
    responsibilities: [
      'Project Manager for Pension Annual Events and leadership for team of developers',
      'Developed internal SLA management process for development team and introduced agile methodologies',
      'Created a Pension calculations system using React front-end and vanilla javascript back-end, taking input from users to perform complex calculations, meeting compliance regulations',
      'Implemented career development programmes to enhance staff skills'
    ]
  },
  {
    startDate: 'Nov 2008',
    role: 'Workforce Planning Manager',
    employer: 'NHS Business Services Authority',
    responsibilities: [
      'Leader for a group of developers, delivering Service Management software across multiple departments (300+ team members), including performance tracking software, time management software and capacity and planning software for management',
      'Tools used were most React, with some simpler tools created using vanilla HTML/CSS & Javascript',
      'Accountable for capacity management and planning intra-day activities across large teams of Pension Administrators',
      'Responsible for metric reporting across the Pensions department, acting as the contact point between NHS Pensions and the Department of Health',
      'Absorbed Team Leadership responsibilities for a Pension Administration team (20 staff) for Quotation production. Within 3 months, improved turnaround times from 90 days to 3 days, implemented development plans to negate skills gaps, reduced resourcing requirement by 15% and improved accuracy to compliance legislation',
      'Realigned the 15% resource reduction into profit generation activities, generating 300k per year from additional activity'
    ]
  }
];
