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
			  }
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
				updateValue(prevState => {
					if (!prevState)
						return {
							[type]: e.target.value,
						};

					return {
						...prevState,
						[type]: e.target.value,
					};
				})
			}
		/>
	);
};
