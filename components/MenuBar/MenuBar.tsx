import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FunctionComponent } from 'react';
import { NextLinkComposed } from '../Link';

export interface NavItemProps {
	linkText?: string;
	linkHref?: string;
}

interface Props {
	navItems: Array<NavItemProps>;
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
						{navItems.map((item, index) => {
							if (item.linkText && item.linkHref) {
								return (
									<Button
										key={index}
										component={NextLinkComposed}
										to={{
											pathname: item.linkHref,
										}}
										color='inherit'
									>
										{item.linkText}
									</Button>
								);
							}
						})}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
