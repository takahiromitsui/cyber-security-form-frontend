import { Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import { privateRoute } from '../../hoc/privateRoute';

const User: FunctionComponent = () => {
	const [isError, setIsError] = useState(false);
	const router = useRouter();
	// if (typeof window !== 'undefined') {
	// 	const token = localStorage.getItem('tokenkkk');
	// 	axios({
	// 		method: 'get',
	// 		url: 'http://localhost:8080/user/info',
	// 		headers: {
	// 			Authorization: 'Bearer ' + token,
	// 		},
	// 	})
	// 		.then(res => {
	// 			setIsError(false);
	// 			console.log(res);
	// 		})
	// 		.catch(err => {
	// 			setIsError(true);
	// 			router.push('/login');
	// 		});
	// }

	return (
		<>{!isError && <Typography>User Credential</Typography>}</>
	);
};

export default privateRoute(User);
