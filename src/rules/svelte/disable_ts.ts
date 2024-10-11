import { level } from "../_strings.js";

const { OFF } = level;

export default ["disable-ts", { "no-unused-vars": OFF /* ESLint Core */, "@typescript-eslint/no-unused-vars": OFF /* TS Extension */ }] as const;
