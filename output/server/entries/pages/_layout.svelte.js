import { c as create_ssr_component, b as subscribe, d as add_attribute, e as each, v as validate_component, f as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
const NAVIGATION_MENU = {
  "User Login": { route: "/login" },
  "User Sign Up": { route: "/signup" },
  "I am a Buddy": { route: "/need" },
  "I want to be a Buddy": { route: "/volunteer" }
};
const css = {
  code: '.x.svelte-e4hy7w.svelte-e4hy7w{width:20px;margin-right:20px;margin-top:20px;filter:invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%);cursor:pointer}#x-container.svelte-e4hy7w.svelte-e4hy7w{display:flex;justify-content:end}#mobile-menu.svelte-e4hy7w.svelte-e4hy7w{position:fixed;top:0vh;width:100vw;height:100vh;background-color:#55939a;z-index:7;display:flex;flex-direction:column;font-size:26px}#mobile-menu.svelte-e4hy7w>a.svelte-e4hy7w{margin:10px 0px;margin-left:20px}.icon.svelte-e4hy7w.svelte-e4hy7w{width:50px;height:50px;filter:invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%)}footer.svelte-e4hy7w.svelte-e4hy7w{box-sizing:border-box;height:100px;background-color:#404040;display:flex;align-items:center;padding-left:50px;width:100vw}:root{--background:#fcfaf6;--accent:"#4e888f";font-family:"Quicksand", sans-serif;font-optical-sizing:auto}body{overflow-x:hidden;padding:0px;margin:0px}html{overflow-x:hidden}nav.svelte-e4hy7w.svelte-e4hy7w{--height:100px;position:absolute;box-sizing:border-box;width:100vw;height:var(--height);display:flex;align-items:center;justify-content:space-between;padding:0px min(2vw, 200px);background-color:transparent;background-image:linear-gradient(180deg, #28253086 10%, #F2295B00 98%);font-weight:600;font-size:15px;z-index:3}.menu.svelte-e4hy7w.svelte-e4hy7w{display:flex;flex-wrap:nowrap;align-items:center}.logo.svelte-e4hy7w.svelte-e4hy7w{width:40vw;max-width:300px}a.svelte-e4hy7w.svelte-e4hy7w{margin:0px 10px;color:white;text-decoration:none}.bars.svelte-e4hy7w.svelte-e4hy7w{cursor:pointer;width:25px;margin-right:10px;filter:invert(100%) sepia(100%) saturate(0%) hue-rotate(166deg) brightness(108%) contrast(105%)}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-11rq5ym_START --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"><!-- HEAD_svelte-11rq5ym_END -->`, ""}  <nav class="svelte-e4hy7w"><a href="/"${add_attribute("aria-current", $page.url.pathname === "/", 0)} class="svelte-e4hy7w"><img class="logo svelte-e4hy7w" src="logo-white.png" alt="logo"></a> <div class="menu svelte-e4hy7w">${`${each(Object.entries(NAVIGATION_MENU), ([name, { route }], i) => {
    return `<a${add_attribute("href", route, 0)}${add_attribute("aria-current", $page.url.pathname === route, 0)} class="svelte-e4hy7w">${escape(name)} </a>`;
  })}`} <a class="button svelte-e4hy7w"${add_attribute("href", "/pricing", 0)}${add_attribute("aria-current", $page.url.pathname === "/pricing", 0)}>${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Get Pricing!`;
    }
  })}</a></div></nav> ${slots.default ? slots.default({}) : ``} ${`<div id="mobile-menu" class="svelte-e4hy7w"><div id="x-container" class="svelte-e4hy7w"><img class="x svelte-e4hy7w" src="x.svg" alt=""></div> <a${add_attribute("href", "/", 0)}${add_attribute("aria-current", $page.url.pathname === "/", 0)} class="svelte-e4hy7w">Home</a> ${each(Object.entries(NAVIGATION_MENU), ([name, { route }], i) => {
    return `<a${add_attribute("href", route, 0)}${add_attribute("aria-current", $page.url.pathname === route, 0)} class="svelte-e4hy7w">${escape(name)} </a>`;
  })}</div>`} <footer class="svelte-e4hy7w" data-svelte-h="svelte-pmj962"><a href="https://www.facebook.com/groups/2758011841018693" class="svelte-e4hy7w"><img class="icon svelte-e4hy7w" src="facebook.svg" alt=""></a> <a href="https://www.instagram.com/myspecialbuddiess/" class="svelte-e4hy7w"><img class="icon svelte-e4hy7w" src="instagram.svg" alt=""></a> </footer>`;
});
export {
  Layout as default
};
