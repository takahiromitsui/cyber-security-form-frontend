import { createContext, ReactNode, useState } from 'react';

const AuthContext = createContext({
	token: '',
	isLoggedIn: false,
	login: (token: string) => {},
	logout: () => {},
});

export const AuthContextProvider = (props:any) => {
	const [token, setToken] = useState<string>('');
	const isLoggedIn = !!token;
	const login = (token: string) => {
		setToken(token);
		console.log(isLoggedIn)
	};
	const logout = () => {
		setToken('');
	};
	const contextValue = {
		token: token,
		isLoggedIn: isLoggedIn,
		login: login,
		logout: logout,
	};
	return (
		<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
	);
};

export default AuthContext;