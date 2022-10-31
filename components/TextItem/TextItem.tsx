import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FunctionComponent } from 'react';

interface Props {
	label: string;
	item: string;
}

export const TextItem: FunctionComponent<Props> = ({ label, item }) => {
	return (
		<Container
      disableGutters={true}
			sx={{
				display: 'flex',
				flexDirection: 'column',
        marginBottom: '1rem',
			}}
		>
			<Typography
				variant='subtitle1'
				sx={{
					fontWeight: 'bold',
				}}
			>
				{label}&#58;
			</Typography>
			<Typography variant='h6'>{item}</Typography>
		</Container>
	);
};
