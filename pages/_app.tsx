import { ThemeProvider } from '@emotion/react';
import { Container } from '@mui/material';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Container
				maxWidth={false}
				sx={{
					bgcolor: '#f7f3f9',
					height: '100vh',
				}}
			>
				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	);
}

export default MyApp;
