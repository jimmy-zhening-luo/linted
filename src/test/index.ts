import Configs from "../pkg/index.js";

console.log(
  new Configs(
    {
      configs: {
        "disable-legacy": {
          rules: {
            "@stylistic/presets/some-legacy-rule": "off",
            "@stylistic/presets/other-legacy-rule": "off",
          },
        },
      },
    },
    {
      configs: {
        "strict-type-checked": {
          rules: {
            "@typescript-eslint/some-ts-strict-typechecked-preset-rule": "warn",
            "@typescript-eslint/other-ts-strict-typechecked-preset-rule": "error",
          },
        },
      },
    },
    "fooParser",
    ["eslint.config.js"],
    ["src/**/*.ts"],
    {
      "user-js-override-bogus": "off",
      "user-js-foober-babber": "warn",
    },
    {
      "@typescript-eslint/user-ts-override-bongo": "error",
      "@typescript-eslint/user-ts-bento-gento": "warn",
    },
  ).configs,
);
