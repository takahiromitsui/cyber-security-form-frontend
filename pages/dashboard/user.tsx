import { Typography } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { privateRoute } from '../../hoc/privateRoute';
import { TOKEN_STORAGE_KEY } from '../../utils/auth_token';

const User: FunctionComponent = () => {
	const [isError, setIsError] = useState(false);
	const [userData, setUserData] = useState<null | any>(null);
	const router = useRouter();

	if (typeof window !== 'undefined') {
		const token = Cookies.get(TOKEN_STORAGE_KEY);
		axios({
			method: 'get',
			url: 'http://localhost:8080/user/info',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		})
			.then(res => {
				setIsError(false);
				setUserData(res.data.data);
			})
			.catch(err => {
				setIsError(true);
				router.push('/login');
			});
	}

	return (
		<>
			{!isError && (
				<>
					<Typography>User Credential</Typography>
					<Typography>{userData?.email}</Typography>
					<Typography>{userData?.id}</Typography>
				</>
			)}
		</>
	);
};
export default privateRoute(User);
