import Core from "@eslinted/core";
import {
  settings,
  defaults,
} from "@eslinted/defaults";
import * as required from "./imports";

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
          settings,
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
