

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DceXxfaA.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/chunks/index.DL3bwM-h.js"];
export const stylesheets = ["_app/immutable/assets/3.DKouPPt7.css"];
export const fonts = [];
