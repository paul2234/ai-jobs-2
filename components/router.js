import Home, {onHomeRender} from './Home.js';
import Email, {onEmailRender} from './Email.js';


// define routes
const routes = {
	"/": { title: "Home",render: Home, onRender: onHomeRender},
	"/email": { title: "Email", render: Email, onRender: onEmailRender}
}

// define router
export default function router() {
	
	const path = window.location.pathname;
	const route = routes[path];
	const view = route ? route.render() : `<h1>404 Not Found</h1>`;
	const app = document.getElementById('app');
  	app.innerHTML = view;
  	route ? route.onRender() : () => {};
  	
}