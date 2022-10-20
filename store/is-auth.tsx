import { createContext, useState } from 'react';

const AuthContext = createContext({
	token: '',
	isLoggedIn: false,
	login: (token: string) => {},
	logout: () => {},
});

export const AuthContextProvider = (props: any) => {
	let initialToken;
	if(typeof window !== 'undefined') {
		initialToken = localStorage.getItem('token');
	}
	const [token, setToken] = useState<string>(initialToken ? initialToken : '');
	const isLoggedIn = !!token;
	const login = (token: string) => {
		setToken(token);
		localStorage.setItem('token', token);
	};
	const logout = () => {
		setToken('');
		localStorage.removeItem('token');
	};
	const contextValue = {
		token: token,
		isLoggedIn: isLoggedIn,
		login: login,
		logout: logout,
	};
	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
