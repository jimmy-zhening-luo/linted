import Core from "@eslinted/core";
import defaults from "@eslinted/defaults";
import imports from "./imports";

export default function (
  extensions: Parameters<typeof Core>[0]["configuration"]["extensions"] = {},
) {
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
