# lint

## What am I?

Jimmy’s highly-opinionated, unflinchingly-strict, yet overridable, extensible, whole-project TypeScript linter: TS, JS, Node, Svelte, JSON/5/C, Jest, HTML, CSS, and sadly YAML.



## Authorized Retailers
[@jimbojet/lint](https://www.npmjs.com/package/@jimbojet/lint)



## Features

### v8.0

#### TypeScript
- stylistic
- typescript-eslint

#### Svelte on TypeScript
- eslint-plugin-svelte
  - svelte
  - svelte-eslint-parser


### v10 (under consideration)

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

#### XML

- XML



## How am I used?

*Outdated... last updated 2023.*

1. In your project's root where your root ESLint config is located, run ```npm i -D @jimbojet/lint```
1. Look at eslint's website's instructions for how to add a plugin to your config. Ideally, use ESLint's modern (as of late 2023) flat config. The following steps assume you are using the flat config.
1. If you want this plugin's rules to supercede, place this plugin last in your configs array. If you want it to be lowest precedence, place it at the top. For anything in between, you get the idea. If you're going to use such a strict, opinionated linter config, I would assume you would want to put this config at the very end of the configs array.
1. You can look through the package source code to see what rules are configured, and you can override specific rules by placing them in a separate config option that comes *after* this base config.
