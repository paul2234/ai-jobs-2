import router from './components/router.js';

// Handle navigation
// window.addEventListener("click",e => {
// 	if (e.target.matches["[data-link]"]) { //not positive what this is doing
// 		e.preventDefault();
// 		history.pushState("","",e.target.href);
// 		router();
// 	}
// });

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);