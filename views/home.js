
import MyComponent from '../components/component.js';
import {navigateTo} from '../components/router.js';
import supabase from '../components/supabase.js';

const data = [
  {projectName:"Google Project",company:"Google",type:"Data Center",location:"Baton Rouge, LA",timeline:"2026 - 2029",jobs:[{role:"Electricians",count:200},{role:"HVAC",count:100},{role:"Plumbing",count:100}]},
  {projectName:"AWS Project",company:"AWS",type:"Data Center & Energy",location:"Richmond, NC",timeline:"2027 - 2030",jobs:[{role:"Electricians",count:100},{role:"HVAC",count:50},{role:"Plumbing",count:100}]},
  {projectName:"Microsoft Project",company:"Microsoft",type:"Data Center & Energy",location:"Richmond, VA",timeline:"2027 - 2030",jobs:[{role:"Electricians",count:100},{role:"HVAC",count:50},{role:"Plumbing",count:100}]}
];

function createProjectCard(project) {
  const template = document.getElementById("project-template");
  const card = template.content.cloneNode(true);

  card.querySelector(".project-name").textContent += project.projectName;
  card.querySelector('.project-company').textContent = project.company;
  card.querySelector('.type').textContent += project.type;
  card.querySelector('.location .tag-text').textContent = project.location;
  card.querySelector('.timeline .tag-text').textContent = project.timeline;
  card.querySelector('.electrician .role-label').textContent = project.jobs[0].role;
  card.querySelector('.electrician .role-value').textContent = project.jobs[0].count;
  card.querySelector('.hvac .role-label').textContent = project.jobs[1].role;
  card.querySelector('.hvac .role-value').textContent = project.jobs[1].count;
  card.querySelector('.plumbing .role-label').textContent = project.jobs[2].role;
  card.querySelector('.plumbing .role-value').textContent = project.jobs[2].count;
  // card.querySelector('.hvac').textContent = project.jobs[1].role;

  return card;
}

async function handleclick(e) {
	e.preventDefault();
	try {
		if (supabase) {
			const data = {
          project: 'ai_jobs',
          event_description: 'clicked_see_more',
          created_at: new Date().toISOString(),
          session_id: window.sessionId,
      }
			const response = await supabase.from('events').insert(data);
		} else {
			console.log("Supabase not initialized. No request sent");
		}
	} catch (error) {
		console.error('Error logging event:', error);
	} finally {
		navigateTo('/email');	
	}

}

function onHomeRender(sessionId) {
	if (window.location.pathname === "/") {
  		const container = document.getElementById("projects");
  		data.forEach(project => {
		  container.appendChild(createProjectCard(project));
		});

		document.getElementById('seeMore').addEventListener('click', function () {
		  document.querySelector('.main').scrollIntoView({ behavior: 'smooth' });
		});

		document.getElementById('projects').addEventListener('click', (e) => {
				handleclick(e,sessionId);
			})
  	}
}

const HomeView = /*html*/`
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
			<div id='seeMore'>See Jobs</div>
		</div>
	</div>
	<div class = "main">
		<h2>AI Creates over 175,000 Skilled Trade Jobs Each Year.</h2>
		<h2>Find Yours Here.</h2>
		<div id = "content">
			<p class = 'content-intro'>America is in a race to win AI. US Companies and the Federal Government have announced over <strong>$1 Trillion</strong> in combined investments into AI Infrastructure. These investments are creating numerous job openings for skilled workers. Find yours today - don't miss out. Find projects near you. Get connected with valuable training resources. Get hired into stable, high-paying jobs. All in one place.</p>
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
					<div class ='project-tag location'>
						<div class ='tag-logo'><i class="fa-solid fa-map-location"></i></div>
						<div class ='tag-text'></div>
					</div>
					<div class ='project-tag timeline'>
						<div class = 'tag-logo'><i class="fa-solid fa-calendar"></i></div>
						<div class ='tag-text'></div>
					</div>
				</div>
				<div class = 'job-tiles'>
					<div class = 'job-tile electrician'>
						<div class = 'role-icon'><i class="fa-solid fa-bolt"></i></div>
						<div class='role-label'></div>
						<div class='role-value'></div>
					</div>
					<div class = 'job-tile hvac'>
						<div class ='role-icon'><i class="fa-solid fa-fire"></i></div>
						<div class='role-label'></div>
						<div class='role-value'></div>
					</div>
					<div class = 'job-tile plumbing'>
						<div class='role-icon'><i class="fa-solid fa-faucet"></i></div>
						<div class='role-label'></div>
						<div class='role-value'></div>
					</div>
				</div>
			</div>
		</template>
	</div>
`;

const Home = new MyComponent(HomeView,onHomeRender);
export default Home;

