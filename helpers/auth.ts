const validateEmail = (email: string) => {
	const mailFormat =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email.match(mailFormat)) return false;
	return true;
};

const validatePassword = (password: string) => {
	if (password.replace(/\s+/g, '').length < 9) return false;
	return true;
};

export const validateInputValue = (
	inputValue:
		| {
				[key: string]: string;
		  }
		| null
		| undefined
) => {
	if (!inputValue) return false;
	const email = inputValue['email'];
	const password = inputValue['password'];
	if (!email || !password) return false;
	const isValidEmail = validateEmail(email);
	const validPassword = validatePassword(password);
	if (!isValidEmail || !validPassword) return false;
	return true;
};
