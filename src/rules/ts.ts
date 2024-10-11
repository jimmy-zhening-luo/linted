import js from "./js.js";
import disable from "./ts/disable.js";
import disable_x from "./ts/disable_x.js";
import enable_x from "./ts/enable_x.js";
import enable from "./ts/enable.js";

export default [
  ...js,
  disable,
  disable_x,
  enable_x,
  enable,
] as const;
