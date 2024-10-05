import core, { type Core } from "@eslinted/core";
import plugins from "./import/plugins.js";
import parsers from "./import/parsers.js";
import files from "./base/files.js";
import rules from "./base/rules.js";

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
      plugins,
      parsers,
      { files, includes },
      { rules, overrides },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}

declare type ScopeOK = Scope extends keyof Core.Input.Files.Base ? keyof Core.Input.Files.Base extends Scope ? "OK" : never : never;

export type BoundaryTest = ScopeOK & {}; /* typescript-eslint will fail if `ScopeOK` is `never` */
