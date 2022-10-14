import { Button } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { Input, InputProps } from '../Input/Input';
import { InputFormBox, InputFormItem } from './styles';

interface Props {
	inputs: Array<InputProps>;
	buttonText: string;
}

export const InputForm: FunctionComponent<Props> = ({ inputs, buttonText }) => {

	const [inputValue, setInputValue] = useState<{[key:string]: string}[]|null>();

	const inputComponents = inputs.map(input => {
		return (
			<InputFormItem key={input.label}>
				<Input label={input.label} type={input.type} 
					updateValue={setInputValue} />
			</InputFormItem>
		);
	});

	return (
		<InputFormBox>
			{inputComponents}
			<Button variant='contained'>{buttonText}</Button>
		</InputFormBox>
	);
};
