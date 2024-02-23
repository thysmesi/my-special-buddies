import { c as create_ssr_component, f as escape, g as null_to_empty } from "./ssr.js";
const css = {
  code: "div.svelte-h7o11a{box-sizing:border-box;padding:10px;background-color:#5ea2aa;box-shadow:0 3px 0 #55939a;width:fit-content;border-radius:6px;cursor:pointer;color:white;text-decoration:none !important}.down.svelte-h7o11a{background-color:#55939a;box-shadow:none;transform:translateY(3px)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(""), true) + " svelte-h7o11a"}">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  Button as B
};
