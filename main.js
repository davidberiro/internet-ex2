var LOGIN_USERNAME = 'admin';
var LOGIN_PASSWORD = 'admin';

var pageIds = ['login_page', 'main_page', 'calculator_page'];

// ----------------------- FUNCTIONS

var switchToPage = function (id) {
	// Hide all pages
	for (var i = 0; i < pageIds.length; i++) {
		document.getElementById(pageIds[i]).style.display = 'none';
	}
	document.getElementById(id).style.display = 'block';
};

var createLoginPage = function () {
	var div1 = document.createElement('div');
	div1.id = 'login_page';
	div1.className = 'login_page';
	document.getElementsByTagName('body')[0].appendChild(div1);

	var form = document.createElement('form');
	var user_str = document.createTextNode('Username: ');
	var pass_str = document.createTextNode('Password: ');

	var username_div = document.createElement('div');
	var password_div = document.createElement('div');

	var username_input = document.createElement('input');
	username_input.type = 'text';
	username_input.name = 'username';
	username_input.id = 'username';

	var password_input = document.createElement('input');
	password_input.type = 'text';
	password_input.name = 'password';
	password_input.id = 'password';

	var submit = document.createElement('input');
	submit.type = 'submit';
	submit.name = 'submit';
	submit.id = 'submit';

	header = document.createElement('h1');
	header.appendChild(document.createTextNode('Login'));
	form.appendChild(header);

	username_div.appendChild(user_str);
	username_div.appendChild(username_input);

	password_div.appendChild(pass_str);
	password_div.appendChild(password_input);

	form.appendChild(username_div);
	form.appendChild(password_div);

	form.appendChild(submit);

	div1.appendChild(form);

	form.onsubmit = function () {
		if (username_input.value == LOGIN_USERNAME && password_input.value == LOGIN_PASSWORD) {
			alert('Login successful!');
			switchToPage('main_page');
			return false;
		}
		alert('Bad credentials. Try again.');

		// Disables redirection after submitting the form (which is the default behaviour of the browser)
		return false;
	};
};

var createCalculatorPage = function () {
	var div3 = document.createElement('div');
	div3.id = 'calculator_page';
	div3.className = 'page';
	document.getElementsByTagName('body')[0].appendChild(div3);
};

var createMainPage = function () {
	var div2 = document.createElement('div');
	div2.id = 'main_page';
	div2.className = 'page'

	var header = document.createElement('h1');
	header.appendChild(document.createTextNode('Main page!'));
	div2.appendChild(header);

	document.getElementsByTagName('body')[0].appendChild(div2);
};

var main = function () {
	createLoginPage();
	createMainPage();
	createCalculatorPage();

	switchToPage('login_page');
};

// ----------------------- END FUNCTIONS

main();


