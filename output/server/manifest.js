export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","bars.svg","chevron-left.svg","chevron-right.svg","facebook.svg","favicon.png","home/.DS_Store","home/3.62a304d232af1b2ef432.png","home/IMG_1935.19ea66f39efb883cada0.jpg","home/IMG_2238.f809cc82b8e73eb9435e.jpg","home/carousel/1.46e57f0c8ce59d1af548.png","home/carousel/IMG_0361.c3246a70ecd01164a2af.jpg","home/carousel/IMG_1576.4ba3dfaad428232b9673.jpg","home/carousel/IMG_4742.4af9b8e2e02630e5d0f2.jpg","home/carousel/bre.d3f0c1c954ec302196a7.png","home/carousel/brreya.83fa5a5b2d14eddb2edd.png","instagram.svg","logo-expanded.png","logo-white.png","logo.png","nathan-anderson-FHiJWoBodrs-unsplash (1).jpg","pexels-rdne-stock-project-7403043.jpg","pexels-tara-winstead-8386122.jpg","shaper.svg","x.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.DRekXh3l.js","app":"_app/immutable/entry/app.uKPRbiWT.js","imports":["_app/immutable/entry/start.DRekXh3l.js","_app/immutable/chunks/entry.ad3euEC4.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/entry/app.uKPRbiWT.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/chunks/index.DL3bwM-h.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
