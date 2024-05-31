import js from "./js.config.js";
import disable from "./ts.disable.config.js";
import enable from "./ts.enable.config.js";

export default [
  ...js,
  ...disable,
  ...enable,
];
