import stylistic from "@stylistic/eslint-plugin";
import { plugin as typescript_eslint } from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import mocha from "eslint-plugin-mocha";
import chai_friendly from "eslint-plugin-chai-friendly";
import chai_expect from "eslint-plugin-chai-expect";
import html_eslint from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

export const plugins = {
  "@stylistic": stylistic,
  "@typescript-eslint": typescript_eslint as { readonly config: Record<string, unknown> },
  svelte,
  mocha,
  "chai-friendly": chai_friendly,
  "chai-expect": chai_expect,
  "@html-eslint": html_eslint,
  jsonc,
  yml,
};
