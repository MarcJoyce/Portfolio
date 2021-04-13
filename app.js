const toggleDarkMode = () => {
  const body = document.querySelector('body');
  body.classList.toggle("dark");
}

const toggleContactMenu = () => {
  const contact = document.querySelector("#contact");
  contact.classList.toggle("active");
}

const setCopyrightYear = () => {
  const year = document.querySelector("#copyright__year");
  const currentYear = new Date().getFullYear();
  year.innerHTML = currentYear;
}

const projects = [
  {
    "id": 1,
    "title": "Memories Application",
    "description": "Full Stack application built using MERN stack",
    "github": "https://github.com/MarcJoyce/MERN-Project",
    "live": "https://marcjoyce.github.io/MERN-Project",
    "image" : "",
    "alt-image": ""
  },
  {
    "id": 2,
    "title": "Father and Son The Karaoke Kings",
    "description": "Website to promote the Father and Son The Karaoke Kings lockdown entertainment duo",
    "github": "https://github.com/MarcJoyce/fask",
    "live": "https://marcjoyce.github.io/fask",
    "image" : "",
    "alt-image": ""
  },
]

const setProjects = () => {
  const workSection = document.querySelector("#work .container");
  
  projects.forEach((project) => {
    const caseStudy = document.createElement("div");
    const image = document.createElement("image");
    const workContainer = document.createElement("div");
    const workTitle = document.createElement("h3");
    const workDescription = document.createElement("h4");
    const anchorOne = document.createElement("a");
    const anchorTwo = document.createElement("a");
    const live = document.createElement("i");
    const code = document.createElement("i");

    caseStudy.classList.add("case__study");

    image.classList.add("work__image");
    image.setAttribute('src', project.image);
    image.setAttribute('alt', project.alt-image);

    workContainer.classList.add("work__container");

    workTitle.classList.add("heading");
    workTitle.classList.add("work__title");
    workTitle.innerHTML = project.title;

    workDescription.classList.add("text");
    workDescription.classList.add("work__description");
    workDescription.innerHTML = project.description;

    anchorOne.setAttribute('href', project.live);
    anchorOne.classList.add("text");
    anchorOne.classList.add("work__cta");

    anchorTwo.setAttribute('href', project.github);
    anchorTwo.classList.add("text");
    anchorTwo.classList.add("work__cta");

    live.classList.add("fa");
    live.classList.add("fa-globe");
    live.innerHTML = " See it live";

    code.classList.add("fab");
    code.classList.add("fa-github");
    code.innerHTML = " See the code";

    anchorOne.appendChild(live);
    anchorTwo.appendChild(code);

    workContainer.appendChild(workTitle);
    workContainer.appendChild(workDescription);
    workContainer.appendChild(anchorOne);
    workContainer.appendChild(anchorTwo);

    caseStudy.appendChild(image);
    caseStudy.appendChild(workContainer);

    workSection.appendChild(caseStudy);

  })

}

setCopyrightYear();
setProjects();