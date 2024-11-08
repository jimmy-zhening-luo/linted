import {
  enable,
  ERROR,
  OFF,
  Ignore,
  Never,
  Always,
  Below,
  Double,
} from "../../_strings";

export default [
  enable,
  {
    // #region ERRORS
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
      {
        props: true,
      },
    ],
    "svelte/no-shorthand-style-property-overrides": ERROR,
    "svelte/no-store-async": ERROR,
    "svelte/no-unknown-style-directive-property": [
      ERROR,
      {
        ignorePrefixed: true,
      },
    ],
    "svelte/require-store-callbacks-use-set-param": ERROR,
    "svelte/require-store-reactive-access": ERROR,
    "svelte/valid-compile": [
      ERROR,
      {
        ignoreWarnings: false,
      },
    ],
    "svelte/valid-prop-names-in-kit-pages": ERROR,

    // #endregion ERRORS

    // #region SECURITY
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#security-vulnerability
    "svelte/no-at-html-tags": ERROR,
    "svelte/no-target-blank": [
      ERROR,
      {
        allowReferrer: false,
        enforceDynamicLinks: Always,
      },
    ],

    // #endregion SECURITY

    // #region BEST PRACTICES
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#best-practices
    "svelte/block-lang": [
      ERROR,
      {
        enforceScriptPresent: true,
        enforceStylePresent: false,
        script: ["ts"],
        style: [
          "css",
          "scss",
        ],
      },
    ], /* INVESTIGATE: */
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
      {
        allowTransitions: false,
      },
    ],
    "svelte/no-reactive-functions": ERROR,
    "svelte/no-reactive-literals": ERROR,
    "svelte/no-svelte-internal": ERROR,
    "svelte/no-unused-class-name": ERROR, /* BUG: ESLint error if array empty */
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

    // #endregion BEST PRACTICES

    // #region STYLE
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#stylistic-issues
    "svelte/derived-has-same-inputs-outputs": ERROR,
    "svelte/first-attribute-linebreak": [
      ERROR,
      {
        multiline: Below,
        singleline: Below,
      },
    ],
    "svelte/html-closing-bracket-spacing": [
      ERROR,
      {
        startTag: Never,
        endTag: Never,
        selfClosingTag: Always,
      },
    ],
    "svelte/html-quotes": [
      ERROR,
      {
        prefer: Double,
        dynamic: {
          quoted: false,
          avoidInvalidUnquotedInHTML: true,
        },
      },
    ],
    "svelte/html-self-closing": [
      ERROR,
      {
        "void": Always,
        foreign: Always,
        component: Always,
        svelte: Always,
        normal: Ignore,
      } /* always | never | ignore */,
    ],
    "svelte/indent": [
      ERROR,
      {
        indent: 2,
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
        textExpressions: Never /* or ALWAYS */,
        attributesAndProps: Never /* or ALWAYS */,
        directiveExpressions: Never /* or ALWAYS */,
        tags: {
          openingBrace: Never /* or ALWAYS */,
          closingBrace: Never /* or ALWAYS or "always-after-expression" */,
        },
      },
    ],
    "svelte/no-extra-reactive-curlies": ERROR,
    "svelte/no-restricted-html-elements": OFF,
    "svelte/no-spaces-around-equal-signs-in-attribute": ERROR,
    "svelte/prefer-class-directive": [
      ERROR,
      {
        prefer: "empty",
      },
    ],
    "svelte/prefer-style-directive": ERROR,
    "svelte/shorthand-attribute": [
      ERROR,
      {
        prefer: Always,
      },
    ],
    "svelte/shorthand-directive": [
      ERROR,
      {
        prefer: Always,
      },
    ],
    "svelte/sort-attributes": OFF /* INVESTIGATE: */,
    "svelte/spaced-html-comment": [
      ERROR,
      Always,
    ],

    // #endregion STYLE

    // #region SVELTE-KIT
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#svelte-kit
    "svelte/no-goto-without-base": ERROR,

    // #endregion SVELTE-KIT

    // #region REQUIRED
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#system
    "svelte/comment-directive": [
      ERROR,
      {
        reportUnusedDisableDirectives: true,
      },
    ],
    "svelte/system": ERROR,

    // #endregion REQUIRED

  },
] as const;
