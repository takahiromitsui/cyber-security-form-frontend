import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FunctionComponent } from 'react';
import { NextLinkComposed } from '../components/Link';

const FourOhFour: FunctionComponent = () => {
	return (
		<>
			<Container
				disableGutters={true}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '10%',
				}}
			>
				<Typography variant='h4'>404 - Page Not Found</Typography>
				<Button
					component={NextLinkComposed}
					to={{
						pathname: '/',
					}}
					variant='contained'
					sx={{
						marginTop: '2rem',
					}}
				>
					Go to Home
				</Button>
			</Container>
		</>
	);
};

export default FourOhFour;
