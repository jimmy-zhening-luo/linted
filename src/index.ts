import core, { type Core } from "@eslinted/core";
import imports from "./imports.js";
import files from "./files.js";
import rules from "./rules.js";

declare type Scope =
  | "js"
  | "ts"
  | "svelte"
  | "mocha"
  | "html"
  | "json"
  | "jsonc"
  | "yml"
  | "md"
;

export default function (
  includes: Partial<Record<Scope, readonly string[]>> = {},
  overrides: Core.Input.Rules.Overrides = {},
) {
  try {
    return core(
      imports.plugins,
      imports.parsers,
      { files, includes },
      { rules, overrides },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}

type BaseScope = keyof Core.Input.Files.Base;
type Scoped = Scope extends BaseScope ? BaseScope extends Scope ? "OK" : never : never;

export type OK = Scoped & {}; /* Expected: "OK". Linter fails if `never` */
