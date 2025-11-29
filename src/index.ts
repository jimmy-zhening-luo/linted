// #region Scope
import Core from "@eslinted/core";
import {
  scopes,
  optional,
  tree,
} from "./scope";
import settings from "./settings";
import defaults from "@eslinted/defaults";
// #endregion

// #region External
import stylistic from "@stylistic/eslint-plugin";
import {
  plugin as ts,
  parser as tsParser,
} from "typescript-eslint";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import css from "@eslint/css";
import json from "@eslint/json";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";
// #endregion

export default function (
  extensions: Parameters<typeof Core>[6] = {},
) {
  const configs = Core(
    scopes,
    optional,
    tree,
    {
      ts: tsParser as NoInfer<typeof tsParser>,
      html: htmlParser,
      yml: ymlParser,
    },
    settings,
    defaults,
    extensions,
  );

  configs[configs.length] = {
    plugins: {
      stylistic,
      ts: ts as NoInfer<typeof ts>,
      html: html as object,
      css,
      json,
      jsonc,
      yml,
    },
  };

  return configs;
}
