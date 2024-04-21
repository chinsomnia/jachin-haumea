const addFooter = document.createElement("footer");

const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.querySelectorAll("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© Chin Antalan ${thisYear}`;
document.body.appendChild(copyright);
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
