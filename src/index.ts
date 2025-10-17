import Core from "@eslinted/core";
import defaults from "@eslinted/defaults";
import imports from "./imports";
import {
  scopes,
  optional,
  tree,
} from "./scope";

export default function (
  extensions: Parameters<typeof Core>[4]["extensions"] = {},
) {
  return Core(
    scopes,
    optional,
    tree,
    imports,
    {
      defaults,
      extensions,
    },
  );
}
