///<reference types="@sveltejs/kit"/>
///<reference lib='webworker'/>
import { build, files, version } from '$service-worker';

declare let self: ServiceWorkerGlobalScope;

const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files];

// service worker installation
self.addEventListener('install', (event) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}
	event.waitUntil(addFilesToCache());
});

// service worker activation
self.addEventListener('activate', (event) => {
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}
	event.waitUntil(deleteOldCaches());
});

// service worker fetch(offline mode)
self.addEventListener('fetch', (event) => {
	async function respondWithCache() {
		const url = new URL(event.request.url);

		const cache = await caches.open(CACHE);
		if (ASSETS.includes(url.pathname)) {
			const cachedResponse = await cache.match(url.pathname);
			if (cachedResponse) return cachedResponse;
		}

		// If data is not found in cache, go for http request
		try {
			const response = await fetch(event.request);
			const isNotExtension = url.protocol === 'http:';
			const isSuccess = response.status === 200;

			if (isNotExtension && isSuccess) {
				await cache.put(event.request, response.clone());
			}
			return response;
		} catch (error) {
			// fall back to cache
			const cachedResponse = await cache.match(event.request);
			if (cachedResponse) return cachedResponse;
		}

		const cachedResponse = await cache.match(event.request);
		return cachedResponse || fetch(event.request);
	}
	event.respondWith(respondWithCache());
});
