export type Scopes = typeof scopes[
  number
];

const scopes = [
  "js",
  "ts",
  "svelte",
  "html",
  "jest",
  "json",
  "jsonc",
  "yml",
] as const;

export default scopes;
