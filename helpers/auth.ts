const validateEmail = (email: string) => {
	const mailFormat =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email.match(mailFormat)) return false;
	return true;
};

export const validateInputValue = (
	inputValue:
		| {
				[key: string]: string;
		  }
		| null
		| undefined
): string | boolean => {
	if (!inputValue) return 'Please fill the form';
	const email = inputValue['email'];
	const password = inputValue['password'];
	if (!email || !password) return 'Please fill the form';
	const isValidEmail = validateEmail(email);
	if (!isValidEmail) return 'Invalid email';
	return true;
};
