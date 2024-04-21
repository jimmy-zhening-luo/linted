import type { Plugin } from "./Plugin.js";

export type Plugins<
  PPre extends string,
  PH extends string,
> = never extends PPre ? Record<string, never> : Record<PH, Plugin<PPre>>;
