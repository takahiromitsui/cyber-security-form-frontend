import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import type { AppProps } from 'next/app';
import { MenuBar, NavItemProps } from '../components/MenuBar';
import { AuthContextProvider } from '../store/is-auth';
import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	const navItems: NavItemProps[] = [
		{
			linkText: 'Sign Up',
			linkHref: '/',
		},
		{
			linkText: 'Login',
			linkHref: '/login',
		},
	];
	return (
		<AuthContextProvider>
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
		</AuthContextProvider>
	);
}

export default MyApp;
