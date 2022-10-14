import styled from '@emotion/styled';
import { Box } from '@mui/material';
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
