# lint

## What am I?

A public npm package containing Jimmy's highly-opinionated config plugin for eslint + typescript-eslint + eslint-stylistic


## Authorized Retailers
[@jimbojet/lint](https://www.npmjs.com/package/@jimbojet/lint)


## Features

### v8.0

#### TypeScript (required)
- stylistic
- typescript-eslint


#### Svelte on TypeScript
- eslint-plugin-svelte
  - svelte
  - svelte-eslint-parser


### v8.1 (under consideration)

#### JSON

- [JSON](https://github.com/azeemba/eslint-plugin-json)
- [JSON](https://github.com/kuceb/eslint-plugin-json-format)
- [JSON (lol)](https://github.com/ota-meshi/eslint-plugin-jsonc)

#### YAML (lol)

- [YAML (apt name...)](https://github.com/ota-meshi/eslint-plugin-yml)

#### Jest

- [Jest](https://github.com/jest-community/eslint-plugin-jest)
- [Jest (style)](https://github.com/dangreenisrael/eslint-plugin-jest-formatting)




## How am I used?

*Outdated... last updated 2023.*

1. In your project's root where your root ESLint config is located, run ```npm i -D @jimbojet/lint```
1. Look at eslint's website's instructions for how to add a plugin to your config. Ideally, use ESLint's modern (as of late 2023) flat config. The following steps assume you are using the flat config.
1. If you want this plugin's rules to supercede, place this plugin last in your configs array. If you want it to be lowest precedence, place it at the top. For anything in between, you get the idea. If you're going to use such a strict, opinionated linter config, I would assume you would want to put this config at the very end of the configs array.
1. You can look through the package source code to see what rules are configured, and you can override specific rules by placing them in a separate config option that comes *after* this base config.
