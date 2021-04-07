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

setCopyrightYear();