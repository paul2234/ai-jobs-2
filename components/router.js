import Home from '../views/home.js';
import Email from '../views/email.js';


// define routes
const routes = {
	"/": { title: "Home", component:Home},
	"/email": { title: "Email", component:Email}
}


export function navigateTo(url) {
	console.log('url',url);
  history.pushState(null, null, url);
  router();
}



// define router
export default function router() {
	
	const path = window.location.pathname;
	const route = routes[path];
	const app = document.getElementById('app');

	if (route) {
		
		app.innerHTML = Home.view;
		// route.component.onRender();
	} else {
		app.innerHTML = `<h1>404 Not Found</h1>`;
	}
  	
}