import Core from "@eslinted/core";
import * as defaults from "@eslinted/defaults";
import * as imports from "./imports";

export default function (
  extensions: Parameters<typeof Core>[0]["configuration"]["extensions"] = {},
) {
  try {
    return Core(
      {
        imports,
        configuration: {
          defaults,
          extensions,
        },
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
