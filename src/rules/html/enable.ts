import type Rule from "@html-eslint/eslint-plugin/types/rules";
import {
  enable,
  ERROR,
  OFF,
  Never,
} from "../../_strings";
import type { RuleRecord } from "@eslinted/core";

const rules: Partial<Record<`@html-eslint/${keyof typeof Rule}`, RuleRecord[string]>> = {
  // #region BEST PRACTICE
  // https://html-eslint.org/docs/rules#best-practice
  "@html-eslint/no-duplicate-attrs": ERROR,
  "@html-eslint/no-duplicate-id": ERROR,
  "@html-eslint/no-extra-spacing-text": [
    ERROR,
    {
      skip: [],
    },
  ],
  "@html-eslint/no-inline-styles": OFF /* breaks Svele app.html */,
  "@html-eslint/no-obsolete-tags": ERROR,
  "@html-eslint/no-restricted-attr-values": OFF,
  "@html-eslint/no-restricted-attrs": OFF,
  "@html-eslint/no-script-style-type": OFF,
  "@html-eslint/no-target-blank": ERROR,
  "@html-eslint/require-attrs": OFF,
  "@html-eslint/require-button-type": ERROR,
  "@html-eslint/require-closing-tags": [
    ERROR,
    {
      selfClosing: Never,
      selfClosingCustomPatterns: [""] /* regex[], intention: any custom pattern is allowed */,
    },
  ],
  "@html-eslint/require-doctype": ERROR,
  "@html-eslint/require-li-container": ERROR,
  "@html-eslint/require-meta-charset": ERROR,

  // #endregion BEST PRACTICE

  // #region SEO
  // https://html-eslint.org/docs/rules#seo
  "@html-eslint/no-multiple-h1": ERROR,
  "@html-eslint/require-lang": ERROR,
  "@html-eslint/require-meta-description": OFF /* breaks Svelte which leaves meta descriptions to route leaves */,
  "@html-eslint/require-open-graph-protocol": OFF /* idk what this is */,
  "@html-eslint/require-title": OFF /* breaks Svelte which leaves title to route leaves */,

  // #endregion SEO

  // #region ACCESSIBILITY
  // https://html-eslint.org/docs/rules#accessibility
  "@html-eslint/no-abstract-roles": ERROR,
  "@html-eslint/no-accesskey-attrs": ERROR,
  "@html-eslint/no-aria-hidden-body": ERROR,
  "@html-eslint/no-non-scalable-viewport": ERROR,
  "@html-eslint/no-positive-tabindex": ERROR,
  "@html-eslint/no-skip-heading-levels": ERROR,
  "@html-eslint/require-frame-title": ERROR,
  "@html-eslint/require-img-alt": [
    ERROR,
    {
      substitute: [],
    },
  ],
  "@html-eslint/require-meta-viewport": ERROR,

  // #endregion ACCESSIBILITY

  // #region STYLE
  // https://html-eslint.org/docs/rules#style

  // #endregion STYLE
  "@html-eslint/attrs-newline": [
    ERROR,
    {
      ifAttrsMoreThan: 0,
      closeStyle: "sameline",
    },
  ],
  "@html-eslint/element-newline": [
    ERROR,
    {
      skip: ["head"],
      inline: ["$inline"],
    },
  ],
  "@html-eslint/id-naming-convention": OFF,
  "@html-eslint/indent": [
    ERROR,
    2,
  ],
  "@html-eslint/lowercase": ERROR,
  "@html-eslint/no-extra-spacing-attrs": [
    ERROR,
    {
      enforceBeforeSelfClose: true,
      disallowMissing: true,
      disallowTabs: true,
      disallowInAssignment: true,
    },
  ],
  "@html-eslint/no-multiple-empty-lines": [
    ERROR,
    {
      max: 1,
    },
  ],
  "@html-eslint/no-trailing-spaces": ERROR,
  "@html-eslint/quotes": [
    ERROR,
    "double",
  ],
  "@html-eslint/sort-attrs": OFF,
} as const;

export default [
  enable,
  rules,
] as const;
