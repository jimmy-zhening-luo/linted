import Core, { type Input } from "@eslinted/core";
import * as defaults from "@eslinted/defaults";
import plugins from "./plugins";
import parsers from "./parsers";

export default function (extensions: Input["extensions"] = {}) {
  try {
    return Core({
      imports: { plugins, parsers },
      defaults,
      extensions,
    });
  }
  catch (e) {
    throw new Error(`linted(): `, { cause: e });
  }
}
