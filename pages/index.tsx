import { Container } from '@mui/system';
import { FunctionComponent, useState } from 'react';
import { InputForm } from '../components/InputForm';

const Home: FunctionComponent = () => {
	const [inputValue, setInputValue] = useState<{
		[key: string]: string;
	} | null>();
	// const validateInputValue = useCallback(() => {
	// 	if (!inputValue) return false;
	// 	console.log(inputValue)
	// 	const email = inputValue.filter(input => input.key === 'email');
	// 	const password = inputValue.filter(input => input.key === 'password');
	// 	console.log(email)

	// 	if (email.length === 0 || password.length === 0) return false;
	// 	const mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
	// 	if (!email[0].email.match(mailFormat)) return false;
	// 	if (password[0].password.replace(/\s+/g, '').length < 10) return false;
	// 	return true;
	// }, [inputValue]);

	// console.log('isValidated', validateInputValue())

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
			/>
		</Container>
	);
};

export default Home;
