import { Box, Container } from '@mui/material';

import axios from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useState } from 'react';
import { InputForm } from '../components/InputForm';
import { validateInputValue } from '../helpers/auth';
import { setURL } from '../utils/auth_token';

const Home: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();
	const [error, setError] = useState<string | null>(null);

	const router = useRouter();

	const sendInputValue = useCallback(() => {
		const validation = validateInputValue(inputValue);
		if (typeof validation === 'string') return setError(validation);
		axios({
			method: 'put',
			url: setURL('/auth/signup'),
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
					buttonText='sign up'
					onClick={() => sendInputValue()}
					error={error}
					linkHref='/login'
					linkText='Already have an account? Log in'
				/>
			</Box>
		</Container>
	);
};

export default Home;
