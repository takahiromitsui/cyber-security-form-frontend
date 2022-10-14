import { FunctionComponent } from 'react';
import { Input, InputProps } from '../Input/Input';
import { InputFormBox, InputFormItem } from './styles';

interface Props {
	inputs: Array<InputProps>;
}

export const InputForm: FunctionComponent<Props> = ({ inputs }) => {
	const inputValues = inputs.map(input => {
		return (
			<InputFormItem key={input.label}>
				<Input label={input.label} type={input.type} />
			</InputFormItem>
		);
	});

	return <InputFormBox>{inputValues}</InputFormBox>;
};
