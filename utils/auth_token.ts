import { ServerResponse } from 'http';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import Router from 'next/router';
// import * as dotenv from 'dotenv';
// dotenv.config();

export const TOKEN_STORAGE_KEY = 'jwt';

export interface JwtToken {
	id?: string;
}

export const decodeToken = (token?: string) => {
	if (!token) return false;
	const { id } = jwt.verify(
		token,
		process.env.JWT_SECRET as string
	) as JwtToken;
	if (!id) return false;
	return true;
};

export const storeToken = (token: string) => {
	Cookie.set(TOKEN_STORAGE_KEY, token, {
		expires: 1,
	});
};

export const redirectToLogin = (server?: ServerResponse) => {
	// add the redirected query param for debugging
	const login = '/login?redirected=true';
	if (server) {
		// server rendered layouts need to do a server redirect
		server.writeHead(302, {
			Location: login,
		});
		server.end();
	} else {
		// only client side layouts have access to next/router
		Router.push(login);
	}
};
