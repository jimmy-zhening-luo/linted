import * as required from "./imports";
import {
  settings,
  files,
  ignores,
  rules,
} from "@eslinted/defaults";
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
          settings,
          defaults: {
            files,
            ignores,
            rules,
          },
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
