import { FunctionComponent } from 'react';
import { InputTextField, InputTypography } from './styles';

interface Props {
	label: string;
}

export const Input: FunctionComponent<Props> = ({ label }) => {
	const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
	return (
		<>
			<InputTypography>{capitalizedLabel}</InputTypography>
			<InputTextField size='small' variant='outlined' label={capitalizedLabel} />
		</>
	);
};
