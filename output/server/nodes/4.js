

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/need/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BoJbp2zT.js","_app/immutable/chunks/scheduler.Cyt2cLpS.js","_app/immutable/chunks/index.DL3bwM-h.js"];
export const stylesheets = ["_app/immutable/assets/3.DKouPPt7.css"];
export const fonts = [];
