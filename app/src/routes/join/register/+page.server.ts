import type { Actions, RequestEvent, ActionFailure, Redirect } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const authToken = cookies.get('authToken');
	// if (!authToken) {
	// 	throw redirect(302, '/login');
	// }
}

export const actions: Actions = {
	default: async ({ cookies, request }: RequestEvent) => {
		const formData = await request.formData();
		console.log('Data Received');

		console.log(...formData);

		// cookies.set('authToken', authToken);
	}
};
