# @jimbojet/lint

Zero-config ESLint flat config factory for (strict, agglutinative) entire-stack formatting and linting: TypeScript, JavaScript, Svelte, HTML, (Tailwind) CSS, Jest, JSON/5/C, and sadly YAML.

## Languages

- TypeScript

- JavaScript

- Svelte

<br />

*See [**Roadmap**](#roadmap) for upcoming language support.*

## Features

- **One-Arugment API:**

  - File scope per-language
  - *Optional:* rule override per-language

- **Two-Statement `eslint.config.js`:** *e.g.*

  ```javascript
  import Lint from "@jimbojet/lint";

  export default [
    ...new Lint(
      {
        js: ["*.config.js"],
        ts: ["*.config.ts", "src/**/*.ts"],
        svelte: ["src/**/*.svelte"],
      },
    )
      .configs,
  ];
  ```

- **Full *Per-Language* Control via Overrides:**

  ```javascript
      // ...
      {
        overrideTs: {
          // turns it off for
          // TypeScript (including in Svelte),
          // but NOT for JavaScript!
          "no-unused-vars": "off",
        },
        overrideSvelte: {
          // turns it back on for
          // .svelte TypeScript blocks,
          // but NEITHER .ts
          // NOR JavaScript!
          "no-unused-vars": "error",
        },
      },
    )
      .configs,
  ];
  ```

- **Zero-Dependency:** No need to install 17 plugins and 12 parsers. Each language's latest (and best) plugin and parser are bundled and optimally configured to work together.

- **Zero-Config:** No need to remember each plugin's `parserOptions` fields. You won't have to *this* just to enable Svelte linting:

  ```javascript
    // Lint Svelte containing TypeScript
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

1. Install [`eslint`](https://www.npmjs.com/package/eslint) and [`@jimbojet/lint`](https://www.npmjs.com/package/@jimbojet/lint)

    ```
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
          // files
          {
            js: [], // array of glob patterns
            ts: [],
            svelte: [],
            // ...other languages
          },
          // optional: overrides
          {
            overrideJs: {
              // same exact rule schema as ESLint
            },
            // valid keys: override<Language>
            // where Language is any key
            // in the first argument
          },
        )
        ```

    - Export member `configs` from the new instance of `@jimbojet/lint`, which is ESLint's flat config. *e.g.*

        ```javascript
        import Lint from "@jimbojet/lint";

        export default [
          ...new Lint(
            {
              js: ["*.config.js"],
              ts: ["src/**/*.ts"],
              svelte: ["src/**/*.svelte"],
            },
          )
            .configs,
        ];
        ```


## Rule Logic (Advanced)

### Language Mapping

Description TBD


### Overrides

Description TBD


### Example

#### TypeScript

- TypeScript files are subject to both ESLint and TypeScript rules.

- TypeScript overrides apply to TypeScript files but not JavaScript files.

#### Svelte

Svelte files contain TypeScript and style blocks, while also containing native Svelte tags whose attributes may contain TypeScript or style. Talk about a linting clusterfuck.

##### TypeScript blocks inside `.svelte` files

- TypeScript rules with appropriate Svelte overrides to deal with TypeScript semantics that only exist in Svelte land.

- Any TypeScript overrides of TypeScript or base ESLint rules UNLESS those rules are incompatible with Svelte, in which case this since otherwise they would crash ESLint.

- Any Svelte overrides of TypeScript or base ESLint rules.

##### Svelte tags (possibly wiht attributes containing TypeScript)

- Svelte rules.

- Same TypeScript logic as for TypeScript blocks, but the Svelte parser has some additional smarts when producing the AST, so only certain TypeScript rules will apply (I have no idea how this works, so take it up with the Svelte parser team).

- Any Svelte overrides (including of TypeScript or base ESLint rules).



## Roadmap

### Next Major Release

#### JSON

- [JSON](https://github.com/ota-meshi/eslint-plugin-jsonc)

#### Markdown

- [Markdown](https://github.com/eslint/eslint-plugin-markdown)

#### HTML

- [HTML](https://github.com/BenoitZugmeyer/eslint-plugin-html)

#### CSS

- [CSS](https://ota-meshi.github.io/eslint-plugin-css/)

#### Tailwind PostCSS

- [Tailwind](https://github.com/francoismassart/eslint-plugin-tailwindcss)


### Backlog

#### Jest

- [Jest](https://github.com/jest-community/eslint-plugin-jest)
- [Jest (style)](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)

#### YAML (lol)

- [YAML (apt name...)](https://github.com/ota-meshi/eslint-plugin-yml)
