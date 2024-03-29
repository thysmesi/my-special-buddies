export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/authenticated/chats": [3],
		"/authenticated/dashboard": [4],
		"/authenticated/edit-profile": [5],
		"/authenticated/meet-buddies": [6],
		"/find-buddies": [7],
		"/jobs-full": [9],
		"/jobs": [8],
		"/join-us": [10],
		"/log-in": [11],
		"/our-buddies": [12],
		"/our-why": [13],
		"/pricing": [14],
		"/sign-up": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';