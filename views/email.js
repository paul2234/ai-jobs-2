import MyComponent from '../components/component.js';
import supabase from '../components/supabase.js';

const onEmailRender = () => {
	const form = document.getElementById('email-form');
	const errorMessage = document.getElementById('email-error');
	const thankYouMessage = document.getElementById('email-thank-you');

	form.addEventListener('submit',async function(event){
		event.preventDefault();

		// console.log('here');
		try {
			const formData = new FormData(form);
			const email = formData.get('email-input');
			console.log('formData',formData);
			console.log('email',email);
			if (!email || email==="") {
				errorMessage.style.display = 'block';
				return;
			};


			const data = {
				email_address:email,
				project:'ai_jobs',
				created_at: new Date().toISOString(),
				session_id: window.sessionId
			}

			const {error} = await supabase.from('emails').insert(data);	
			if (error) throw new Error(error);

			// update displays
			form.style.display = 'none';
			errorMessage.style.display = 'none';
			thankYouMessage.style.display = 'block';
		} catch (error) {
			console.error(error);
			errorMessage.style.display = 'block';
			thankYouMessage.style.display = 'none';
		}
	});
};


const EmailView = /*html*/`
		<div id = "email">
			<div id="email-hero-nav">
				<img src="assets/vf_logo.svg" id='hero-image'>
		  		<div id ='hero-company-name'>
		  			<p id = 'hero-bold'>Future Jobs</p>
		  			<p id = 'hero-small'>by Virtus Foundry</p>
		  		</div>
		  	</div>
			<h1>Hello! You caught us before we're ready.</h1>
			<p style="margin-top: 30px">We're working hard to make Future Jobs amazing. Things are going well, and we should be able to connect you with more jobs soon. If you'd like us to send you a reminder when we're ready, just drop your email below."</p>
			<form id='email-form'>
				<input type="email" id="email-input" name="email-input" placeholder="email"/>
				<button id="email-button">Submit</button>
			</form>
			<div id='email-thank-you'>Thanks! We'll let you know when we're ready.</div>
			<div id='email-error'>Something went wrong. Please try again.</div>
		</div>
	
`

const Email = new MyComponent(EmailView,onEmailRender);
export default Email;