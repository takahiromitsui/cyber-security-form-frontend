import { Container } from '@mui/system';
import axios from 'axios';
import { FunctionComponent, useCallback, useState } from 'react';
import { InputForm } from '../components/InputForm';
import { validateInputValue } from '../helpers/auth';

const Login: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();

	const sendInputValue = useCallback(() => {
		if (!validateInputValue(inputValue)) return;
		axios({
			method: 'post',
			url: 'http://localhost:8080/auth/login',
			data: {
				email: inputValue!['email'],
				password: inputValue!['password'],
			},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
	}, [inputValue]);

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
				buttonText='login'
				onClick={() => sendInputValue()}
			/>
		</Container>
	);
};

export default Login;
