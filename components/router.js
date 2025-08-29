import Home from '../views/home.js';
import Email from '../views/email.js';


// define routes
const routes = {
	// "/": Home,
	"/":Email,
	"/email": Email
}

window.sessionId = Math.floor(Math.random() * 2147483647);



export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}


// define router
export default function router() {
	const path = window.location.pathname;
	const route = routes[path];
	const app = document.getElementById('app');

	if (route) {
		app.innerHTML = route.view();
		route.onRender();
	} else {
		app.innerHTML = `<h1>404 Not Found</h1>`;
	}
  	
}