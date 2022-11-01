import { Box, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { TextItem } from '../../components/TextItem';
import { privateRoute } from '../../hoc/privateRoute';
import { logout, setURL, TOKEN_STORAGE_KEY } from '../../utils/auth_token';

const User: FunctionComponent = () => {
	const [isError, setIsError] = useState(false);
	const [userData, setUserData] = useState<null | any>(null);
	const router = useRouter();

	if (typeof window !== 'undefined') {
		const token = Cookies.get(TOKEN_STORAGE_KEY);
		axios({
			method: 'get',
			url: setURL('/user/info'),
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
			.then(res => {
				console.log('called')
				setIsError(false);
				setUserData(res.data.data);
			})
			.catch(err => {
				setIsError(true);
				router.push('/login');
			});
	}
	const textItems = [
		{
			label: 'Email',
			item: userData?.email,
		},
		{
			label: 'Date of creation',
			item: userData?.createdAt,
		},
	];

	return (
		<>
			{!isError && (
				<Container
					disableGutters={true}
					sx={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'column',
						marginTop: '10%',
					}}
				>
					<Typography variant='h4'>User Credential</Typography>
					<Box
						sx={{
							marginTop: '10%',
						}}
					>
						{textItems.map((item, index) => {
							return (
								<TextItem
									key={`user-textItem-${index}`}
									label={item.label}
									item={item.item}
								/>
							);
						})}
					</Box>
					<Button onClick={() => logout(TOKEN_STORAGE_KEY)}>
						<Typography>Logout</Typography>
					</Button>
				</Container>
			)}
		</>
	);
};
export default privateRoute(User);
