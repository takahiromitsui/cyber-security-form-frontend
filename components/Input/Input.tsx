import { FunctionComponent } from 'react';
import { InputTypography, InputTextField } from './styles';

interface Props {
	label: string;
}

export const Input: FunctionComponent<Props> = ({ label }) => {
	return (
		<>
			<InputTypography>{label}</InputTypography>
			<InputTextField />
		</>
	);
};
