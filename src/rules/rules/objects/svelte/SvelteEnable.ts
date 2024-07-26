import type { Boundary } from "@eslinted/core";
import { ERROR, OFF } from "../level.js";
import {
  NEVER,
  ALWAYS,
  BELOW,
  DOUBLE,
} from "../state.js";
import { Enable } from "../id.js";

export default [
  Enable,
  {

    // Possible Errors
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#possible-errors
    "svelte/infinite-reactive-loop": ERROR,
    "svelte/no-dom-manipulating": ERROR,
    "svelte/no-dupe-else-if-blocks": ERROR,
    "svelte/no-dupe-on-directives": ERROR,
    "svelte/no-dupe-style-properties": ERROR,
    "svelte/no-dupe-use-directives": ERROR,
    "svelte/no-dynamic-slot-name": ERROR,
    "svelte/no-export-load-in-svelte-module-in-kit-pages": ERROR,
    "svelte/no-not-function-handler": ERROR,
    "svelte/no-object-in-text-mustaches": ERROR,
    "svelte/no-reactive-reassign": [
      ERROR,
      { props: true },
    ],
    "svelte/no-shorthand-style-property-overrides": ERROR,
    "svelte/no-store-async": ERROR,
    "svelte/no-unknown-style-directive-property": [
      ERROR,
      {
      // ignoreProperties: [], // ESLint error if array empty
        ignorePrefixed: true,
      },
    ],
    "svelte/require-store-callbacks-use-set-param": ERROR,
    "svelte/require-store-reactive-access": ERROR,
    "svelte/valid-compile": [
      ERROR,
      { ignoreWarnings: false },
    ],
    "svelte/valid-prop-names-in-kit-pages": ERROR,

    // Security
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": ERROR,
    "svelte/no-target-blank": [
      ERROR,
      {
        allowReferrer: false,
        enforceDynamicLinks: ALWAYS,
      },
    ],

    // Best Practices
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      ERROR,
      {
        enforceScriptPresent: true, // investigate
        enforceStylePresent: false, // investigate
        script: ["ts"],
        style: [
          "css",
          "scss",
        ],
      },
    ],
    "svelte/button-has-type": [
      ERROR,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    "svelte/no-at-debug-tags": ERROR,
    "svelte/no-ignored-unsubscribe": ERROR,
    "svelte/no-immutable-reactive-statements": ERROR,
    "svelte/no-inline-styles": [
      ERROR,
      { allowTransitions: false },
    ],
    "svelte/no-reactive-functions": ERROR,
    "svelte/no-reactive-literals": ERROR,
    "svelte/no-svelte-internal": ERROR,
    "svelte/no-unused-class-name": ERROR, // ESLint error if array empty

    /*
  "svelte/no-unused-class-name": [
    ERROR,
    { allowedClassNames: [] },
  ],
  */
    "svelte/no-unused-svelte-ignore": ERROR,
    "svelte/no-useless-mustaches": [
      ERROR,
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "svelte/prefer-destructured-store-props": ERROR,
    "svelte/require-each-key": ERROR,
    "svelte/require-event-dispatcher-types": ERROR,
    "svelte/require-optimized-style-attribute": ERROR,
    "svelte/require-stores-init": ERROR,
    "svelte/valid-each-key": ERROR,

    // Style
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#stylistic-issues
    "svelte/derived-has-same-inputs-outputs": ERROR,
    "svelte/first-attribute-linebreak": [
      ERROR,
      {
        multiline: BELOW,
        singleline: BELOW,
      },
    ],
    "svelte/html-closing-bracket-spacing": [
      ERROR,
      {
        startTag: NEVER,
        endTag: NEVER,
        selfClosingTag: ALWAYS,
      },
    ],
    "svelte/html-quotes": [
      ERROR,
      {
        prefer: DOUBLE,
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: true,
        },
      },
    ],
    "svelte/html-self-closing": [
      ERROR,
      {
        "void": ALWAYS, // or NEVER or "ignore"
        normal: ALWAYS, // or NEVER or "ignore"
        component: ALWAYS, // or NEVER or "ignore"
        svelte: ALWAYS, // or NEVER or "ignore"
      },
    ],
    "svelte/indent": [
      ERROR,
      {
        indent: 2,

        // ignoredNodes: [], // ESLint error if array empty
        switchCase: 1,
        alignAttributesVertically: true,
      },
    ],
    "svelte/max-attributes-per-line": [
      ERROR,
      {
        multiline: 1,
        singleline: 1,
      },
    ],
    "svelte/mustache-spacing": [
      ERROR,
      {
        textExpressions: NEVER, // or ALWAYS
        attributesAndProps: NEVER, // or ALWAYS
        directiveExpressions: NEVER, // or ALWAYS
        tags: {
          openingBrace: NEVER, // or ALWAYS
          closingBrace: NEVER, // or ALWAYS or "always-after-expression"
        },
      },
    ],
    "svelte/no-extra-reactive-curlies": ERROR,
    "svelte/no-restricted-html-elements": OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": ERROR,
    "svelte/prefer-class-directive": [
      ERROR,
      { prefer: "empty" },
    ],
    "svelte/prefer-style-directive": ERROR,
    "svelte/shorthand-attribute": [
      ERROR,
      { prefer: ALWAYS },
    ],
    "svelte/shorthand-directive": [
      ERROR,
      { prefer: ALWAYS },
    ],
    "svelte/sort-attributes": OFF, // TBD
    "svelte/spaced-html-comment": [
      ERROR,
      ALWAYS, // or NEVER
    ],

    // svelte-kit
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-goto-without-base": ERROR,

    // System (REQUIRED)
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": [
      ERROR,
      { reportUnusedDisableDirectives: true },
    ],
    "svelte/system": ERROR,
  },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
