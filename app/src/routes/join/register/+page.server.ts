import type { Actions, RequestEvent } from '@sveltejs/kit';
import axios from 'axios';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }: RequestEvent) => {
		const formData = await request.formData();

		const accountPayload = {
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(accountPayload);

		try {
			await axios.post('http://127.0.0.1:8000/api/user', accountPayload);
		} catch (error) {
			return { failure: true };
		}
		console.log('Success!');

		throw redirect(303, '/join/login');
	}
};
