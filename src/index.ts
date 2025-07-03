import * as required from "./imports";
import * as defaults from "@eslinted/defaults";
import Core from "@eslinted/core";

export default function (
  extensions: Parameters<typeof Core>[0]["configuration"]["extensions"] = {},
  optional: Parameters<typeof Core>[0]["imports"]["optional"] = {},
) {
  try {
    return Core(
      {
        imports: {
          required,
          optional,
        },
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
