import js from "./eslint.js.config.js";
import disable from "./eslint.ts.disable.config.js";
import enable from "./eslint.ts.enable.config.js";

export default [
  ...js,
  ...disable,
  ...enable,
];
