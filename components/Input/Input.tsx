import { FunctionComponent } from 'react';
import { InputTextField } from './styles';

export interface InputProps {
	label: string;
	type: 'text' | 'number' | 'email' | 'password';
}

export const Input: FunctionComponent<InputProps> = ({ label, type }) => {
	const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
	return (
		<InputTextField
			size='small'
			variant='outlined'
			label={capitalizedLabel}
			type={type}
		/>
	);
};
