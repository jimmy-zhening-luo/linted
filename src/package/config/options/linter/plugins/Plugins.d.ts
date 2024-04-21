import type Plugin from "./plugin/Plugin.js";

export default interface Plugins {
  [handle: string]: Plugin;
}
