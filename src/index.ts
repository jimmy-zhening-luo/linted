import Core from "@eslinted/core";
import * as defaults from "@eslinted/defaults";
import * as imports from "./imports";

export default function (extensions: Parameters<typeof Core>[0]["extensions"] = {}): readonly unknown[] {
  try {
    return Core(
      {
        imports,
        defaults,
        extensions,
      },
    );
  }
  catch (e) {
    throw new Error(
      "linted: ",
      { cause: e },
    );
  }
}
