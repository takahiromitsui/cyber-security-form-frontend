import { Button } from '@mui/material';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Input, InputProps } from '../Input/Input';
import { NextLinkComposed } from '../Link';
import {
	ErrorBox,
	ErrorTypography,
	InputFormBox,
	InputFormItem,
	LinkBox,
} from './styles';

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
	error: string | null;
	linkText?: string;
	linkHref?: string;
}

export const InputForm: FunctionComponent<Props> = ({
	inputs,
	buttonText,
	setInputValue,
	onClick,
	error,
	linkText,
	linkHref,
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
			<ErrorBox>
				{error && <ErrorTypography variant='h6'>{error}</ErrorTypography>}
			</ErrorBox>
			{inputComponents}
			<Button variant='contained' onClick={onClick}>
				{buttonText}
			</Button>
			{linkText && linkHref && (
				<LinkBox>
					<Button
						component={NextLinkComposed}
						to={{
							pathname: linkHref,
						}}
					>
						{linkText}
					</Button>
				</LinkBox>
			)}
		</InputFormBox>
	);
};
