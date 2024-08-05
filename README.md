# [`linted`](https://npmjs.com/package/linted)

___DO NOT USE - DOCUMENTATION IS SIGNIFICANTLY OUTDATED AS OF AUGUST 4, 2024___

Zero-config [__ESLint__](https://eslint.org/) flat config factory for (strict, agglutinative) entire-stack formatting and linting: TypeScript, JavaScript, Svelte, HTML, (Tailwind) CSS, Mocha, JSON(C), and sadly YAML.

1. [Languages](#languages)
1. [Features](#features)
1. [Limitation](#limitation)
1. [Install](#install)
1. [Roadmap](#roadmap)
1. [Rule Logic (Advanced)](#rule-logic-advanced)

## Languages

### Web

- __[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):__ [`@stylistic`](https://eslint.style) + [`eslint`](https://eslint.org)
- __[TypeScript](https://typescriptlang.org):__ [`@typescript-eslint`](https://typescript-eslint.io/) + [`@stylistic`](https://eslint.style) + [`eslint`](https://eslint.org)
- __[Svelte](https://svelte.dev):__ [`eslint-plugin-svelte`](https://sveltejs.github.io/eslint-plugin-svelte/) + [`@typescript-eslint`](https://typescript-eslint.io/) + [`@stylistic`](https://eslint.style) + [`eslint`](https://eslint.org)
- __[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML):__ [`@html-eslint`](https://html-eslint.org/)

### Data

- __[JSON](https://json.org) & [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments):__ [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/)
- __[YAML](https://redhat.com/en/topics/automation/what-is-yaml):__ [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/)

### Library

- __[Mocha](https://mochajs.org/):__ [`eslint-plugin-mocha`](https://github.com/lo1tuma/eslint-plugin-mocha) + [`@typescript-eslint`](https://typescript-eslint.io/) + [`@stylistic`](https://eslint.style) + [`eslint`](https://eslint.org)

### Text

- __[Markdown](https://en.wikipedia.org/wiki/Markdown) ([GitHub Flavored Markdown](https://github.github.com/gfm/) & [CommonMark](https://commonmark.org)):__ [`eslint-plugin-markdownlint`](https://gitlab.com/pawelbbdrozd/eslint-plugin-markdownlint/-/blob/main/README.md) <- bad plugin, check it out and find out why. still mad at wasting my time on this gitlab-hosted piece of shit. Probably gonna deprecate it out of spite

<br />

_See language support __[roadmap](#roadmap).___

## Features

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

### Zero-Arugment API

```javascript
linted();
```

### Two-Statement `eslint.config.js`

```javascript
import linted from "linted";

export default linted();
```

### Total Control via Optional Arguments

___WIP for v14.1, currently inaccurate___.

- `includes` (scoped [`glob patterns`](https://code.visualstudio.com/docs/editor/glob-patterns))
- `ignores` (global [`glob patterns`](https://code.visualstudio.com/docs/editor/glob-patterns) and other options)
- `overrides` (scoped rule statements)

#### `includes` _(Scoped)_

```javascript
import linted from "linted";

linted(
  {
    /** includes **/
    js: [
      "scripts/**/*/.{js,mjs}",
      "*.config.js",
    ], /* example: array of glob patterns to lint using JavaScript rules */
    ts: [
      "src/**/*.ts",
      "*.config.ts",
    ],

    // svelte: [],
    // html: [],

    /* ...json, jsonc, yml, */
  },
)
```

#### `ignores` _(Global)_

```javascript
import linted from "linted";

linted(
  { /** includes **/ },
  {
    /** ignores **/
    gitignore: true, /* (default) never lint any git-ignored file */
    ignoreArtifacts: true, /* (default) never lint "**/*/package-lock.json" */
    global: [], /* array of glob patterns to never lint */
  },
)
```

#### `overrides` _(Scoped)_

```javascript
linted(
  { /** includes **/ },
  { /** ignores **/ },
  {
    /** overrides **/
    overrideJs: {}, /* js rule overrides */
    overrideTs: {
      /* Overrides apply to `ts` scope,
       * but NOT to `js` scope,
       * NOR to `svelte` scope.
       */
      "no-unused-vars": "off", /* example: ESLint base rule */
      "@typescript-eslint/indent": "warn", /* example: TypeScript plugin rule */
    }, /* js rule overrides */

    /* ...overrideTs, overrideSvelte, overrideHtml, overrideJson, overrideJsonc, overrideYml, */
  },
)
```

## Limitation

In __TypeScript__ projects, [`skipLibCheck`](https://www.typescriptlang.org/tsconfig/#skipLibCheck) must be `true`.

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

    - Export `linted` with optional [arguments](#total-control-via-optional-arguments):

        ```javascript
        import linted from "linted";

        export default linted(
          // ...
        );
        ```

___

## Roadmap

### v11

#### Mocha

- Mocha

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

- __`json`:__ `json`

- __`jsonc`:__ `json` < `jsonc`

- __`yml`:__ `yml`

### Files

#### Global Ignores

##### `.gitignore`

By default, `linted` ignores all files in `.gitignore`. This behavior can be disabled.

##### `package-lock.json`

`**/*.package-lock.json` is always skipped. _This cannot be overriden._

##### `ignores`

Additional glob patterns supplied if matched by a file will skip linting that file, even if a scope pattern matches the file.

#### Scoped Includes

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
json
jsonc
yml
ignores (global)
```

### Override

Overrides are per-__scope.__

#### Example

`overrideTs` rules apply to files which:

- ✅ ONLY match scope `ts`.

- ✅ match scope `ts` and any number of lower precedence scopes (e.g. `js`).

  `overrideTs` rules do __NOT__ apply to files which:

- ❌ match scope `ts` and at least one higher precedence scope (e.g. `svelte`), even if the higher precedence scope includes `ts` language default rules (e.g. `svelte` includes `ts` default rules, but NOT `overrideTs` rules).
