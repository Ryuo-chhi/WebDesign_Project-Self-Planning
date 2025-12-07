// Make login/signup forms interactive: slide in/out on button click
document.addEventListener('DOMContentLoaded', function () {
	const formOverlay = document.getElementById('formOverlay');
	const loginBtn = document.getElementById('login');
	const signupBtn = document.getElementById('sign-up');
	const closeBtn = document.querySelector('.form-group .close');
	const loginGroup = document.querySelector('.login-group');
	const signupGroup = document.querySelector('.signup-group');
	const linkSignup = document.querySelector('.link-signup');
	const linkLogin = document.querySelector('.link-login');

	// Helper to reset form state so only one is visible
	function showLoginForm() {
		loginGroup.classList.remove('slide');
		signupGroup.classList.add('slide');
		signupGroup.setAttribute('aria-hidden', 'true');
	}
	function showSignupForm() {
		loginGroup.classList.add('slide');
		loginGroup.setAttribute('aria-hidden', 'true');
		signupGroup.classList.remove('slide');
	}
	function closeOverlay() {
		formOverlay.classList.remove('open');
		formOverlay.setAttribute('aria-hidden', 'true');
	}

	// Show login form overlay
	loginBtn.addEventListener('click', function () {
		showLoginForm();
		formOverlay.classList.add('open');
		formOverlay.setAttribute('aria-hidden', 'false');
	});

	// Show signup form overlay
	signupBtn.addEventListener('click', function () {
		showSignupForm();
		formOverlay.classList.add('open');
		formOverlay.setAttribute('aria-hidden', 'false');
	});

	// Close overlay on close icon
	closeBtn.addEventListener('click', function () {
		closeOverlay();
	});

	// Close overlay when clicking outside the form (on overlay background)
	formOverlay.addEventListener('mousedown', function (e) {
		// Only close if click is directly on the overlay, not on the form content
        // only close the overlay if the click happened directly on the overlay background, not inside the form.”
		if (e.target === formOverlay) {
			closeOverlay();
		}
	});

	// Switch to signup form from login
	linkSignup.addEventListener('click', function (e) {
		e.preventDefault();
		showSignupForm();
	});

	// Switch to login form from signup
	linkLogin.addEventListener('click', function (e) {
		e.preventDefault();
		showLoginForm();
	});
});
