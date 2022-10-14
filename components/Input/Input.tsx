import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { InputTextField } from './styles';

export interface InputProps {
	label: string;
	type: 'text' | 'number' | 'email' | 'password';
}

interface Props extends InputProps {
	updateValue: Dispatch<
		SetStateAction<
			| {
					[key: string]: string;
			  }[]
			| null
			| undefined
		>
	>;
}

export const Input: FunctionComponent<Props> = ({
	label,
	type,
	updateValue,
}) => {
	const capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);

	return (
		<InputTextField
			size='small'
			variant='outlined'
			label={capitalizedLabel}
			type={type}
			onChange={e =>
				updateValue(prev => {
					if (prev) {
						const selectedInput = prev.find(input => Object.keys(input)[0] === label);
						if (selectedInput) {
							selectedInput[label] = e.target.value;
							return [...prev]
						}
						return [...prev, { [label]: e.target.value }];
					} else {
						return [{ [label]: e.target.value }];
					}
				})
			}
		/>
	);
};
