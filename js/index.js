const addFooter = document.createElement("footer");
document.body.append(addFooter);

const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.querySelector("footer"); //removed querySelectorAll and changed to querySelector
const copyright = document.createElement("p");
copyright.innerHTML = `© Chin Antalan ${thisYear}`;
footer.appendChild(copyright);
copyright.style.backgroundColor = "black";
copyright.style.color = "white";
copyright.style.fontSize = ".8rem";
copyright.style.padding = ".8rem";

const skills = ["Javascript", "HTML", "CSS", "GitHub", "Adobe Illustrator"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}

fetch("https://api.github.com/users/chinsomnia/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const repositories = data;
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerHTML = `${repositories[i].name}`;
      projectList.appendChild(project);
    }
  })
  .catch((error) => console.error(error));
