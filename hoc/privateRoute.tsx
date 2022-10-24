import { NextPageContext } from 'next';
import ServerCookie from 'next-cookies';
import { Component } from 'react';
import {
	decodeToken,
	redirectToLogin,
	TOKEN_STORAGE_KEY,
} from '../utils/auth_token';

export type AuthProps = {
	token: string;
};

export function privateRoute(WrappedComponent: any) {
	// eslint-disable-next-line react/display-name
	return class extends Component<AuthProps> {
		state = {
			auth: this.props.token,
		};

		static async getInitialProps(ctx: NextPageContext) {
			// create AuthToken
			const token = ServerCookie(ctx)[TOKEN_STORAGE_KEY];
			const initialProps = { token };
			const isValidToken = decodeToken(token);
			if (!isValidToken) {
				redirectToLogin(ctx.res);
			}

			if (WrappedComponent.getInitialProps) {
				const wrappedProps = await WrappedComponent.getInitialProps(
					initialProps
				);
				// make sure our `auth: AuthToken` is always returned
				return { ...wrappedProps, token };
			}
			return initialProps;
		}

		componentDidMount(): void {
			// since getInitialProps returns our props after they've JSON.stringify
			// we need to reinitialize it as an AuthToken to have the full class
			// with all instance methods available
			this.setState({ auth: this.props.token });
		}

		render() {
			// we want to hydrate the WrappedComponent with a full instance method of
			// AuthToken, the existing props.auth is a flattened auth, we want to use
			// the state instance of auth that has been rehydrated in browser after mount
			const { token, ...propsWithoutAuth } = this.props;
			return <WrappedComponent auth={this.state.auth} {...propsWithoutAuth} />;
		}
	};
}
