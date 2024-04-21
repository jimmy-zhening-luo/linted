import Configs from "./package/index.js";

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
        recommended: {
          rules: {
            "some-js-preset-recommended-rule": "error",
            "other-js-preset-recommended-rule": "warn",
          },
        },
      },
    },
    {
      configs: {
        "eslint-recommended": {
          rules: {
            "@typescript-eslint/some-ts-preset-recommended-rule": "warn",
            "@typescript-eslint/other-ts-preset-recommended-rule": "error",
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
