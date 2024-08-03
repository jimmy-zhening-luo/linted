import type { Boundary } from "@eslinted/core";

type RuleEntry = Boundary.Input.Rules.Preset.Entry;

namespace RuleEntry {
  export type Object = Boundary.Input.Rules.Preset.Entry.Object;
}

export type {
  RuleEntry as default,
  RuleEntry,
};
export * as Strings from "../strings/index.js";
