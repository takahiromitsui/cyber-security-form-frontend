import { FunctionComponent } from 'react';
import { Input } from '../Input/Input';
import { InputFormBox } from './styles';

export const InputForm: FunctionComponent = () => {
	return (
		<InputFormBox>
			<Input label='email' />
			<Input label='password' />
		</InputFormBox>
	);
};
