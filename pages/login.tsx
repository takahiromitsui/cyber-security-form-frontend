import { Box } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useState } from 'react';
import { InputForm } from '../components/InputForm';
import { validateInputValue } from '../helpers/auth';
import { storeToken } from '../utils/auth_token';

const Login: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();
	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

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
		})
			.then(res => {
				setError(null);
				storeToken(res.data.data.token);
				router.push('/dashboard/user');
			})
			.catch(err => {
				setError(err.response.data.message);
			});
	}, [inputValue, router]);

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Box
				sx={{
					marginTop: '10%',
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
					error={error}
					linkHref='/'
					linkText='Sign up?'
				/>
			</Box>
		</Container>
	);
};

export default Login;
