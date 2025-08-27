const data = [
  {projectName:"Google Project",company:"Google",type:"Data Center",location:"Baton Rouge, LA",timeline:"2026 - 2029",jobs:[{role:"Electricians",count:200},{role:"HVAC",count:100}]},
  {projectName:"AWS Project",company:"AWS",type:"Data Center & Energy",location:"Richmond, NC",timeline:"2027 - 2030",jobs:[{role:"Electricians",count:100},{role:"HVAC",count:50}]}
];

function createProjectCard(project) {
  const template = document.getElementById("project-template");
  const card = template.content.cloneNode(true);

  card.querySelector(".project-name").textContent += project.projectName;
  card.querySelector('.project-company').textContent = project.company;
  card.querySelector('.type').textContent = project.type;
  card.querySelector('.location').textContent = project.location;
  card.querySelector('.timeline').textContent = project.timeline;

  return card;
}

const container = document.getElementById("content");
data.forEach(project => {
  container.appendChild(createProjectCard(project));
});

document.getElementById('seeMore').addEventListener('click', function () {
  document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
});