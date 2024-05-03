const addFooter = document.createElement("footer");
document.body.append(addFooter);

const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.querySelector("footer"); //removed querySelectorAll and changed to querySelector
const copyright = document.createElement("p");
copyright.innerHTML = `© Chin Antalan ${thisYear}`;
footer.appendChild(copyright);

const skills = ["Javascript", "HTML", "CSS", "GitHub", "Adobe Illustrator"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");
for (i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = `${skills[i]}`;
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector('[id="messages"]');
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="${usersEmail}">${usersName}</a>, <span>${usersMessage}</span>`;

  //remove button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  //reset form
  event.target.reset();
});
