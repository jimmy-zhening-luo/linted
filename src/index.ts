import Core from "@eslinted/core";
import {
  settings,
  defaults,
} from "@eslinted/defaults";
import imports from "./imports";

export default function (
  extensions: Parameters<typeof Core>[0]["configuration"]["extensions"] = {},
) {
  try {
    return Core(
      {
        imports,
        configuration: {
          settings,
          defaults,
          extensions,
        },
      },
    );
  }
  catch (e) {
    throw TypeError(
      "linted: ",
      { cause: e },
    );
  }
}
