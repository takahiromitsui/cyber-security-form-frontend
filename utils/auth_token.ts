import Cookie from 'js-cookie';

export const storeToken = (key: string, token: string) => {
	Cookie.set(key, token);
};
