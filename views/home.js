
import {navigateTo} from '../components/router.js';

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

export function onHomeRender() {
	if (window.location.pathname === "/") {
  		const container = document.getElementById("projects");
  		data.forEach(project => {
		  container.appendChild(createProjectCard(project));
		});

		document.getElementById('seeMore').addEventListener('click', function () {
		  document.getElementById('main').scrollIntoView({ behavior: 'smooth' });
		});

		document.getElementById('projects').addEventListener('click', (e) => {
			e.preventDefault();
			navigateTo('/email');
		})
  	}
}

const Home = () => /*html*/`
  <div id = "hero">
  	<div id = 'hero-nav'>
  		<img src="assets/vf_logo.svg" id='hero-image'>
  		<div id ='hero-company-name'>
  			<p id = 'hero-bold'>Future Jobs</p>
  			<p id = 'hero-small'>by Virtus Foundry</p>
  		</div>
  	</div>
		<div id = "hero-content">
			<h1>Find Skilled Trade Jobs on AI Projects Near You</h1>
			<button id='seeMore'>See Jobs</button>
		</div>
	</div>
	<div id = "main">
		<h2>AI Creates over 175,000 Skilled Trade Jobs Each Year.</h2>
		<h2>Find Yours Here.</h2>
		<div id = "content">
			<p class = 'content-intro'>America is in a race to win AI. Winning this race will require massive infrastructure investments. Companies are investing heavily, creating numerous job openings for skilled trades in the process. Find projects near you. Get connected with valuable training resources. Get hired into stable, high-paying jobs. All in one place.</p>
			<div id = "projects"></div>
		</div>
		<template id = 'project-template'>
			<div class = 'project-card'>
				<div class = 'project-header'>
					<h3 class='project-name'></h3>
					<p class='project-company'></p>
				</div>
				<div class = 'project-tags'>
					<div class ='project-tag type'></div>
					<div class ='project-tag location'></div>
					<div class ='project-tag timeline'></div>
				</div>
				<div class = 'job-tiles'>
					<div class = 'job-tile electrician'></div>
					<div class = 'job-tile hvac'></div>
					<div class = 'job-tile plumbing'></div>
				</div>
			</div>
		</template>
	</div>
`;

export default Home;

