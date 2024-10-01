import core, { type Boundary } from "@eslinted/core";
import { plugins, parsers } from "./import/index.js";
import { base, preset } from "./static/index.js";

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
  overrides: Boundary.Input.Rules.Overrides = {},
) {
  try {
    return core(
      plugins,
      parsers,
      { base, includes },
      { preset, overrides },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}

declare type ScopeOK = Scope extends keyof Boundary.Input.Files.Base ? keyof Boundary.Input.Files.Base extends Scope ? "OK" : never : never;

export type BoundaryTest = ScopeOK & {}; /* typescript-eslint will fail if `ScopeOK` is `never` */
