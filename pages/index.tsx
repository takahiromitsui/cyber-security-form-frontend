import { Container } from '@mui/system';
import { FunctionComponent } from 'react';
import { InputForm } from '../components/InputForm';

const Home: FunctionComponent = () => {
	return (
	<Container sx={{
		display: 'flex',
		justifyContent: 'center',
	}}>
		<InputForm />
	</Container>
	
	);
};

export default Home;
