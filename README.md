# [@jimbojet/lint](https://npmjs.com/package/@jimbojet/lint)

Zero-config [**ESLint**](https://eslint.org/) flat config factory for (strict, agglutinative) entire-stack formatting and linting: TypeScript, JavaScript, Svelte, HTML, (Tailwind) CSS, Jest, JSON/5/C, and sadly YAML.

## Languages

### Web

- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** [`eslint`](https://eslint.org) + [`@stylistic`](https://eslint.style)
- **[TypeScript](https://typescriptlang.org):** + [`@typescript-eslint`](https://typescript-eslint.io/)
- **[Svelte](https://svelte.dev):** + [`eslint-plugin-svelte`](https://sveltejs.github.io/eslint-plugin-svelte/)
- **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML):** + [`@html-eslint`](https://html-eslint.org/)

### Data

- **[JSON](https://json.org), [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments), [JSON5](https://json5.org/):** [`eslint-plugin-jsonc`](https://ota-meshi.github.io/eslint-plugin-jsonc/)
- **[YAML](https://redhat.com/en/topics/automation/what-is-yaml):** [`eslint-plugin-yml`](https://ota-meshi.github.io/eslint-plugin-yml/)

### Test

- **[Jest](https://jestjs.io):** [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest)

<br />

*See language support **[roadmap](#roadmap).***

## Features

### One-Arugment API

- Scope (i.e. file to lint)
- *Optional:* [override](#full-control-via-per-scope-override) rules

### Two-Statement `eslint.config.js`

```javascript
import Lint from "@jimbojet/lint";

export default [
  ...new Lint(
    { // Scope (i.e. files to lint)
      js: ["*.config.js"],
      ts: ["*.config.ts", "src/**/*.ts"],
      svelte: ["src/**/*.svelte"],
    },
  )
    .configs,
];
```

### Full Control via *Per-Scope* Override

```javascript
      // ...Scope (i.e. files to lint)
    },
    { // Optional: Override
      overrideTs: {
        // Turns it off in "ts" scope,
        // but NOT in "js" scope,
        // NOR in "svelte" scope.
        "no-unused-vars": "off", // JS base rule
        // "@typescript-eslint/ ..., or TS plugin rule
      },
      overrideSvelte: {
        // ... JS, TS, or Svelte plugin rules
      },
    },
  )
    .configs,
];
```

### Zero-Dependency

No need to install 17 plugins and 12 parsers: each language's latest plugin is bundled and configured.

### Zero-Config

No need to remember each plugin's `parserOptions`; you won't have to do *this* just to enable Svelte linting:

  ```javascript
    // Lint TypeScript blocks in Svelte
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
    processor: "svelte/svelte"
  ```

## Install

1. Install [`eslint`](https://npmjs.com/package/eslint) and [`@jimbojet/lint`](https://npmjs.com/package/@jimbojet/lint)

    ```bash
    npm i -D eslint @jimbojet/lint
    ```

1. Create `eslint.config.js` in your root directory.

1. In `eslint.config.js`:
    - Import `@jimbojet/lint`.

        ```javascript
        import Lint from "@jimbojet/lint";
        ```

    - Create a new instance of `@jimbojet/lint`, with arguments:

        ```javascript
        new Lint(
          { // Scope (i.e. files to lint)
            js: ["*.config.js"], // glob pattern array
            ts: ["*.config.ts", "src/**/*.ts"],
            svelte: [
              // ...
            ],

            // ...jest, html, css, jsonc, json5, json, yml
          },
          { // Optional: Override
            overrideJs: {
              // ...same rule schema as ESLint
            },

            // ...overrideTs, overrideSvelte, overrideJest,
            //    overrideHtml, overrideCss, overrideJsonc,
            //    overrideJson5, overrideJson, overrideYml
          },
        )
        ```

    - Export member `configs` from the new instance of `@jimbojet/lint`, which is ESLint's flat config. *e.g.*

        ```javascript
        import Lint from "@jimbojet/lint";

        export default [
          ...new Lint(
            // ...
          )
            .configs,
        ];

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

### Scope

#### Precedence

- If a file matches more than one **scope** glob, the set of all scopes' rules are applied to the file.

- If any rule within that combined set is specified in more than one scope, then the highest-precedence scope's rule specification wins.

Scope precedence (low to high):

```bash
js
ts
svelte
jest
html
jsonc
json5
json
yml
```

#### Default Rules

- Each scope maps to a unique language.

- Each language has a set of default rules.

- A given language can be an extension of or depend on another language. For example, TypeScript extends JavaScript, while Svelte depends on TypeScript (which extends JavaScript). For such a language, its scope's default rules are aggregated with the default rules of extended or consumed languages, using the same precedence order as that of scope.

##### Scope-Language Inclusion

- js: .js

- ts: .js, .ts

- svelte: .js, .ts, .svelte

- jest: .js, .ts, (.spec).ts

- html: .html

- jsonc: .json [JSON], .json [JSONC/5]

- json5: .json [JSON], .json [JSONC/5]

- json: .json [JSON]

- yml: .y(a)ml

### Override

Overrides are per-**scope.**

#### Example

`overrideTs` rules apply to files that:

- ✅ ONLY match scope `ts`.

- ✅ match scope `ts` and any number of lower precedence scopes (e.g. `js`).

`overrideJs` rules do **NOT** apply to files that:

- ❌ match scope `ts` and at least one higher precedence scope (e.g. `svelte`), even if the higher precedence scope includes `ts` language default rules (e.g. `svelte` includes `ts` default rules, but NOT `overrideTs` rules).
