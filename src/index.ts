import Core from "@eslinted/core";
import {
  scopes,
  optional,
  tree,
} from "./scope";
import imports from "./imports";
import settings from "./settings";
import defaults from "@eslinted/defaults";

export default function (
  extensions: Parameters<typeof Core>[5]["extensions"] = {},
) {
  return Core(
    scopes,
    optional,
    tree,
    imports,
    settings,
    {
      defaults,
      extensions,
    },
  );
}
