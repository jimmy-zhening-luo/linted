import type { Input } from "@eslinted/core";
import Core from "@eslinted/core";
import imports from "./imports";
import * as defaults from "@eslinted/config";

export default function (extensions: Input["extensions"] = {}) {
  try {
    return Core({
      imports,
      defaults,
      extensions,
    });
  }
  catch (e) {
    throw new Error(`linted(): `, { cause: e });
  }
}
