import type { Input } from "@eslinted/core";
import Core from "@eslinted/core";
import plugins from "./plugins";
import parsers from "./parsers";
import * as defaults from "@eslinted/defaults";

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
