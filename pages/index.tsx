import { Container } from '@mui/system';
import { FunctionComponent } from 'react';
import { InputForm } from '../components/InputForm';

const Home: FunctionComponent = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<InputForm
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
