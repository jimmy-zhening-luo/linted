import ts from "./ts.js";
import disable_js from "./svelte/disable_js.js";
import disable_ts from "./svelte/disable_ts.js";
import disable from "./svelte/disable.js";
import enable_x from "./svelte/enable_x.js";
import enable from "./svelte/enable.js";

export default [
  ...ts,
  disable_js,
  disable_ts,
  disable,
  enable_x,
  enable,
] as const;
