import js from "../js";
import disable from "./disable";
import disable_x from "./disable_x";
import enable_x from "./enable_x";
import enable from "./enable";

export default [
  ...js,
  disable,
  disable_x,
  enable_x,
  enable,
] as const;
