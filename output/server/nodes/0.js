import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D1NDfKsP.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/chunks/index.DL3bwM-h.js","_app/immutable/chunks/Button.BlFLlUH_.js","_app/immutable/chunks/stores.BuJA0H9P.js","_app/immutable/chunks/entry.ad3euEC4.js"];
export const stylesheets = ["_app/immutable/assets/0.BIt1_F1p.css","_app/immutable/assets/Button.qptmRyu8.css"];
export const fonts = [];
