'use server';

import { ID } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';

export const login = async ({ email, password }: signInProps) => {
	try {
		const { account } = await createAdminClient();

		const response = await account.createEmailPasswordSession(email, password);

		return parseStringify(response);
	} catch (error) {
		console.error('Login Error', error);
	}
};

export const signUp = async (userData: SignUpParams) => {
	const { email, password, firstName, lastName } = userData;
	// create user account
	try {
		const { account } = await createAdminClient();

		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			`${firstName} ${lastName}`
		);

		const session = await account.createEmailPasswordSession(email, password);

		cookies().set('appwrite-session', session.secret, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
		});

		return parseStringify(newUserAccount);
	} catch (error) {
		console.error('Sign-Up Error', error);
	}
};

export async function getLoggedInUser() {
	try {
		const { account } = await createSessionClient();
		const user = await account.get();

		return parseStringify(user);
	} catch (error) {
		console.error('Cannot get logged in user', error);
		return null;
	}
}

export const logout = async () => {
	try {
		const { account } = await createSessionClient();

		cookies().delete('appwrite-session');

		await account.deleteSession('current');
	} catch (error) {
		return null;
	}
};
