import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import Cookies from 'js-cookie';
import type { AppProps } from 'next/app';
import { MenuBar, NavItemProps } from '../components/MenuBar';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import { decodeToken, TOKEN_STORAGE_KEY } from '../utils/auth_token';

function MyApp({ Component, pageProps }: AppProps) {
	const token = Cookies.get(TOKEN_STORAGE_KEY);
	const isValidToken = decodeToken(token);
	const navItems: NavItemProps[] | undefined = !isValidToken
		? [
				{
					linkText: 'Sign Up',
					linkHref: '/',
				},
				{
					linkText: 'Login',
					linkHref: '/login',
				},
		  ]
		: undefined;
	return (
		<ThemeProvider theme={theme}>
			<Container
				maxWidth={false}
				disableGutters={true}
				sx={{
					bgcolor: '#f7f3f9',
					height: '100vh',
				}}
			>
				<MenuBar navItems={navItems} />
				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
