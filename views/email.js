import MyComponent from '../components/component.js';
import supabase from '../components/supabase.js';
const onEmailRender = () => {
	document.getElementById('email-button').addEventListener('click', (e) => {
	  e.preventDefault();
	  e.stopPropagation();
	  let value = document.getElementById("email-input").value;
	 



	});
};


const EmailView = () => /*html*/`
	<div id = "root">
		<h1>Hello! You caught us before we're ready.</h1>
		<p>We're working hard to make Future Jobs amazing. Things are going well, and we should be able to connect you with more jobs soon. If you'd like us to send you a reminder when we're ready, just drop your email below."</p>
		<input type="email" id="email-input" placeholder="email"/>
		<div id="email-button"></div>
	</div>
`

const Email = new MyComponent(EmailView,onEmailRender);
export default Email;