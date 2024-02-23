

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pricing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.sM_jHiNM.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/chunks/index.DL3bwM-h.js"];
export const stylesheets = ["_app/immutable/assets/3.DKouPPt7.css"];
export const fonts = [];
