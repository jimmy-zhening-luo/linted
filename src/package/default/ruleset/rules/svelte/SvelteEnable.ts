const ERROR = "error";
const OFF = "off";
const SvelteEnable: IRules = {

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
      ignoreProperties: [],
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
      enforceDynamicLinks: "always",
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
  "svelte/no-unused-class-name": [
    ERROR,
    { allowedClassNames: [] },
  ],
  "svelte/no-unused-svelte-ignore": ERROR,
  "svelte/no-useless-mustaches": [
    ERROR,
    {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    },
  ],
  "svelte/svelte/prefer-destructured-store-props": ERROR,
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
      multiline: "below",
      singleline: "below",
    },
  ],
  "svelte/html-closing-bracket-spacing": [
    ERROR,
    {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "always",
    },
  ],
  "svelte/html-quotes": [
    ERROR,
    {
      prefer: "double",
      dynamic: {
        quoted: false,
        avoidInvalidUnquotedInHTML: true,
      },
    },
  ],
  "svelte/html-self-closing": [
    ERROR,
    {
      "void": "always", // or "never" or "ignore"
      normal: "always", // or "never" or "ignore"
      component: "always", // or "never" or "ignore"
      svelte: "always", // or "never" or "ignore"
    },
  ],
  "svelte/indent": [
    ERROR,
    {
      indent: 2,
      ignoredNodes: [],
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
      textExpressions: "never", // or "always"
      attributesAndProps: "never", // or "always"
      directiveExpressions: "never", // or "always"
      tags: {
        openingBrace: "never", // or "always"
        closingBrace: "never", // or "always" or "always-after-expression"
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
    { prefer: "always" },
  ],
  "svelte/shorthand-directive": [
    ERROR,
    { prefer: "always" },
  ],
  "svelte/sort-attributes": OFF, // TBD
  "svelte/spaced-html-comment": [
    ERROR,
    "always", // or "never"
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
};

export default SvelteEnable;
