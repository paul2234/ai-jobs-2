import router from './components/router.js';

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);