# [`linted`](https://npmjs.com/package/linted)

Zero-config [__ESLint__](https://eslint.org/) flat config factory for (strict, agglutinative) entire-stack formatting and linting: TypeScript, JavaScript, Svelte, HTML, (Tailwind) CSS, Jest, JSON(C), and sadly YAML.

1. [Languages](#languages)
1. [Features](#features)
1. [Limitation](#limitation)
1. [Install](#install)
1. [Roadmap](#roadmap)
1. [Rule Logic (Advanced)](#rule-logic-advanced)

## Languages

### Web

- __[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):__ [`eslint`](https://eslint.org) + [`@stylistic`](https://eslint.style)
- __[TypeScript](https://typescriptlang.org):__ _...JavaScript_ + [`@typescript-eslint`](https://typescript-eslint.io/)
- __[Svelte](https://svelte.dev):__ _...TypeScript_ + [`eslint-plugin-svelte`](https://sveltejs.github.io/eslint-plugin-svelte/)
- __[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML):__ [`@html-eslint`](https://html-eslint.org/)

### Test

- __[Jest](https://jestjs.io):__ _...TypeScript_ + [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)

### Data

- __[JSON](https://json.org) & [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments):__ [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/)
- __[YAML](https://redhat.com/en/topics/automation/what-is-yaml):__ [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/)

\
_See language support __[roadmap](#roadmap).___

## Features

### One-Arugment API

- Files to lint ([`glob patterns`](code.visualstudio.com/docs/editor/glob-patterns))
- _Optional:_ Rule [overrides](#full-control-via-per-scope-override)

### Two-Statement `eslint.config.js`

```javascript
import linted from "linted";

export default linted(

  // Files to lint
  {

    // skip linting all files in .git
    gitignore: false,

    // global ignores
    ignores: ["package-lock.json"],

    // scoped includes
    js: ["eslint.config.js"],
    ts: [
      "src/**/*.ts",
      "vite.config.ts",
    ],
    svelte: ["src/**/*.svelte"],

    // ...html, jest, json, jsonc, yml,
  },
);
```

### Full Control via _Per-Scope_ Override

```javascript
export default linted(

  // Files to lint
  {
    // ...
  },

  // Optional: Rule overrides
  {

    // Override rules in `ts` scope,
    // but NOT in `js` scope,
    // NOR in `svelte` scope.
    overrideTs: {

      // ESLint base rule
      "no-unused-vars": "off",

      // TypeScript plugin rule
      "@typescript-eslint/indent": "warn",
    },

    // ...overrideTs, overrideSvelte, overrideHtml,
    //    overrideJest, overrideJson, overrideJsonc,
    //    overrideYml,
  },
);
```

### Zero-Dependency

No need to install 17 plugins and 12 parsers: each language's latest plugin is bundled and configured.

### Zero-Config

No need to remember each plugin's `parserOptions`; you won't have to do _this_ just to enable Svelte linting:

```javascript
    // lint TypeScript blocks in Svelte
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": ts,
      svelte,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        extraFileExtensions: [".svelte"],
      },
    },
    processor: "svelte/svelte",
```

## Limitation

In __TypeScript__ projects, [`skipLibCheck`](https://www.typescriptlang.org/tsconfig/#skipLibCheck) must be `true`.

### Why?

This compromise was required to bundle `jest` and `eslint-plugin-jest` into `linted`.

### Won't Fix

`linted` will never remove this limitation until the following conditions are all false:

- `jest` poorly supports `ESModule` resolution, so it breaks any modern TypeScript build despite being the gold standard for JavaScript tests.
- TypeScript maintains a number of official project templates, all of which (including `strictest`) have `skipLibCheck: true`.

### Enable `skipLibCheck`

By default, `skipLibCheck` is `false`. To set it to `true`:

#### `tsconfig.json`

```jsonc
{
  "compilerOptions": {
    "skipLibCheck": true,
  },
}
```

#### _...or_ `tsc` CLI option

```bash
tsc --skipLibCheck
``` 

## Install

1. Install [`eslint`](https://npmjs.com/package/eslint) and [`linted`](https://npmjs.com/package/linted).

    ```bash
    npm i -D eslint@^8.57 linted
    ```

1. Create `eslint.config.js` in your project root.

1. In `eslint.config.js`:
    - Import function `linted`.

        ```javascript
        import linted from "linted";
        ```

    - Export `linted` with optional [arguments](#one-argument-api):

        ```javascript
        import linted from "linted";

        export default linted(
          {
            // ...
          },
          { // Optional: Override
            overrideJs: {
              // ...same rule schema as ESLint
            },

            // ...overrideTs, overrideSvelte, overrideHtml,
            //    overrideJest, overrideJson, overrideJsonC,
            //    overrideYml
          },
        );
        ```

___

## Roadmap

### v11

#### Tailwind PostCSS

- [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss)

- [CSS](https://ota-meshi.github.io/eslint-plugin-css/)

#### HTML Connectors

- [Embedded TypeScript](https://github.com/BenoitZugmeyer/eslint-plugin-html)

- Embedded CSS

- Svelte Interaction TBD

  - .svelte-embedded HTML (on top of Svelte HTML rules)

  - .html files in Svelte projects (e.g. title not required)

  - Should Svelte-Linter handle all .html / HTML-embedded linting for Svelte projects, and HTML-Linter only handles non-Svelte projects?

#### JSON (Custom Schema Validation)

- [JSON Custom Schema Validation](https://github.com/ota-meshi/eslint-plugin-json-schema-validator)

___

## Rule Logic (Advanced)

### What is `scope`?

Each `scope` maps to a unique `language`:

- __`js`:__ `JavaScript`

- __`ts`:__ `TypeScript`

- __`svelte`:__ `Svelte`

- __`html`:__ `HTML`

- __`jest`:__ `Jest`

- __`json`:__ `JSON`

- __`jsonc`:__ `JSONC`

- __`yml`:__ `YAML`

### Rules

Each `scope` supports:

- all base ESLint rules

- all rules from its `language`'s [__plugins__](#languages)

#### Default Rules

- Each `language` has a set of default rules.

#### Language-Aggregate `scope`

A `language` can be an extension of or depend on another `language`.

For example:

- TypeScript extends JavaScript

- Svelte depends on TypeScript (which extends JavaScript)

For such a `language`, its `scope`'s default rules are aggregated with the default rules of extended or consumed `language`s by `scope` precedence:

- __`js`:__ `js`

- __`ts`:__ `js` < `ts`

- __`svelte`:__ `js` < `ts` < `svelte`

- __`html`:__ `html`

- __`jest`:__ `js` < `ts` < `jest`

- __`json`:__ `json`

- __`jsonc`:__ `json` < `jsonc`

- __`yml`:__ `yml`

### Files

#### Global Ignores

By default, `linted` ignores all files in `.gitignore`.


#### Default Files

Files specified in `scope` are appended to the following default files:

```javascript
  {
    js: [
      "{src,static}/**/*.{js,mjs,cjs}",
      "*.{js,mjs,cjs}",
    ],
    ts: [
      "{src,static}/**/*.{ts,mts,cts}",
      "*.{ts,mts,cts}",
    ],
    svelte: ["{src,static}/**/*.svelte"],
    html: [
      "{src,static}/**/*.html",
      "*.html",
    ],
    jest: [
      "{src,static}/**/*.spec.{ts,mts,cts}",
      "{src,static}/**/*.spec.{js,mjs,cjs}",
    ],
    json: [
      "{src,static}/**/*.json",
      "*.json",
    ],
    jsonc: [
      "tsconfig.json",
      "{src,static}/**/*.jsonc",
      "*.jsonc",
    ],
    yml: [
      ".github/workflows/*.{yml,yaml}",
      "{src,static}/**/*.{yml,yaml}",
      "*.{yml,yaml}",
    ],
  },
```

#### Scope Conflict

- If a given file matches more than one `scope` glob, then the set of all matching `scope`s' rules are applied to the file.

- If any rule is specified in more than one `scope` matching a given file, the  specifies a rule, then the highest-precedence `scope`'s rule specification wins.

##### Scope Precedence (low to high)

```bash
js
ts
svelte
html
jest
json
jsonc
yml
```

### Override

Overrides are per-__scope.__

#### Example

`overrideTs` rules apply to files which:

- ✅ ONLY match scope `ts`.

- ✅ match scope `ts` and any number of lower precedence scopes (e.g. `js`).

  `overrideTs` rules do __NOT__ apply to files which:

- ❌ match scope `ts` and at least one higher precedence scope (e.g. `svelte`), even if the higher precedence scope includes `ts` language default rules (e.g. `svelte` includes `ts` default rules, but NOT `overrideTs` rules).
