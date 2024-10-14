import ts from "../ts";
import disable_js from "./disable_js";
import disable_ts from "./disable_ts";
import disable from "./disable";
import enable_x from "./enable_x";
import enable from "./enable";

export default [
  ...ts,
  disable_js,
  disable_ts,
  disable,
  enable_x,
  enable,
] as const;
