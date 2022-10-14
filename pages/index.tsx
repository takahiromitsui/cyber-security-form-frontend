import { Container } from '@mui/system';
import { FunctionComponent } from 'react';
import { InputForm } from '../components/InputForm';

const Home: FunctionComponent = () => {
	return (
		<Container component="main" maxWidth="xs">
			<InputForm />
		</Container>
	);
};

export default Home;
