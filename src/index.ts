import Core from "@eslinted/core";
import {
  settings,
  defaults,
} from "@eslinted/defaults";
import * as imports from "./imports";

export default function (
  extensions: Parameters<typeof Core>[0]["configuration"]["extensions"] = {},
  ...attachments: Parameters<typeof Core>[0]["configuration"]["attachments"]
) {
  try {
    return Core(
      {
        imports,
        configuration: {
          settings,
          defaults,
          extensions,
          attachments,
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
