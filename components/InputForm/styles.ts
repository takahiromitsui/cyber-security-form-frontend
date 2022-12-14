import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { theme } from '../../styles/theme';

export const InputFormBox = styled(Box)`
	width: 400px;
	background: ${theme.palette.primary.contrastText};
	padding: 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
`;

export const InputFormItem = styled(Box)`
	margin-bottom: 20px;
`;

export const LinkBox = styled(Box)`
	text-align: center;
	margin: 1rem 0;
`;

export const ErrorBox = styled(Box)`
	min-height: 2rem;
	margin-bottom: 1rem;
`;

export const ErrorTypography = styled(Typography)`
	color: ${theme.palette.error.light};
	::first-letter {
		text-transform: capitalize;
	}
`;
