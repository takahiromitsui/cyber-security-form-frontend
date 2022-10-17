import { Container } from '@mui/system';
import axios from 'axios';
import { FunctionComponent, useCallback, useState } from 'react';
import { InputForm } from '../components/InputForm';

const Home: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();

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

	const validateInputValue = useCallback(() => {
		if (!inputValue) return false;
		const email = inputValue['email'];
		const password = inputValue['password'];
		if (!email || !password) return false;
		const isValidEmail = validateEmail(email);
		const validPassword = validatePassword(password);
		if (!isValidEmail || !validPassword) return false;
		return true;
	}, [inputValue]);

	const sendInputValue = useCallback(() => {
		if (!validateInputValue()) return;
		axios({
			method: 'put',
			url: 'http://localhost:8080/auth/signup',
			data: {
				email: inputValue!['email'],
				password: inputValue!['password'],
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
	}, [inputValue, validateInputValue]);

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<InputForm
				setInputValue={setInputValue}
				inputs={[
					{
						label: 'email',
						type: 'email',
					},
					{
						label: 'password',
						type: 'password',
					},
				]}
				buttonText='sign up'
				onClick={() => sendInputValue()}
			/>
		</Container>
	);
};

export default Home;
