import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { logout, TOKEN_STORAGE_KEY } from '../../utils/auth_token';
import { NextLinkComposed } from '../Link';

export interface NavItemProps {
	linkText: string;
	linkHref: string;
}

interface Props {
	navItems?: Array<NavItemProps>;
}

export const MenuBar: FunctionComponent<Props> = ({ navItems }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography
						variant='h6'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						My App
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems ? (
							navItems.map((item, index) => {
								return (
									<Button
										key={`menubar-button-${index}`}
										component={NextLinkComposed}
										to={{
											pathname: item.linkHref,
										}}
										color='inherit'
									>
										<Typography>{item.linkText}</Typography>
									</Button>
								);
							})
						) : (
							<Button color='inherit' onClick={() => logout(TOKEN_STORAGE_KEY)}>
								<Typography>Logout</Typography>
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
