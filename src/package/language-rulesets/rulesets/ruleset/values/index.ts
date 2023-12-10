type Severity = "error" | "warn" | "off";
enum Option {
  always,
  never,
  any,
  explicit,
  consistent,
  "as-needed",
  "no-public",
  "*",
}

export type { Severity };
export { Option };
