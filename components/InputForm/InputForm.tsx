import { Button } from '@mui/material';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Input, InputProps } from '../Input/Input';
import { InputFormBox, InputFormItem } from './styles';

interface Props {
	inputs: Array<InputProps>;
	buttonText: string;
	setInputValue: Dispatch<
		SetStateAction<
			| {
					[key: string]: string;
			  }
			| null
			| undefined
		>
	>;
	onClick: () => void;
}

export const InputForm: FunctionComponent<Props> = ({
	inputs,
	buttonText,
	setInputValue,
	onClick,
}) => {
	const inputComponents = inputs.map(input => {
		return (
			<InputFormItem key={input.label}>
				<Input
					label={input.label}
					type={input.type}
					updateValue={setInputValue}
				/>
			</InputFormItem>
		);
	});

	return (
		<InputFormBox>
			{inputComponents}
			<Button variant='contained' onClick={onClick}>
				{buttonText}
			</Button>
		</InputFormBox>
	);
};
