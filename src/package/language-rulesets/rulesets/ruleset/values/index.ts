export namespace Values {
  export type Severity = "error" | "warn" | "off";
  export enum Option {
    always,
    never,
    any,
    explicit,
    consistent,
    "as-needed",
    "no-public",
    "*",
  }
}

export default Values;
