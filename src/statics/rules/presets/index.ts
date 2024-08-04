import type { Boundary } from "@eslinted/core";

type RuleEntry = Boundary.Input.Rules.Preset.Entry;

namespace RuleEntry {
  export type Object = Boundary.Input.Rules.Preset.Entry.Object;
}

export type { RuleEntry, RuleEntry as default };
export * as Strings from "../strings/index.js";
