import type Values from "./values/index.js";

export default interface IRuleSet {
  [key: string]: Values.Severity | [
    Values.Severity,
    ...unknown[],
  ];
}
