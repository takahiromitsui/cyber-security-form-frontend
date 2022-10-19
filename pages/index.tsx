import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useState } from 'react';
import { InputForm } from '../components/InputForm';
import { validateInputValue } from '../helpers/auth';

const Home: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();
	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const sendInputValue = useCallback(() => {
		if (!validateInputValue(inputValue)) return;
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
		})
			.then(res => {
				router.push('/login');
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
				flexDirection: 'column',
				alignItems: 'center',
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
			{error && <Typography>{error}</Typography>}
		</Container>
	);
};

export default Home;
