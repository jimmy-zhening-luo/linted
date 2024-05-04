import Configs from "../pkg/index.js";

const stylistic: StylisticPluginBody = {
  configs: {
    "disable-legacy": {
      rules: {
        "@stylistic/presets/some-legacy-rule": "off",
        "@stylistic/presets/other-legacy-rule": "off",
      },
    },
  },
};
const ts: TsPluginBody = {
  configs: {
    "strict-type-checked": {
      rules: {
        "@typescript-eslint/some-ts-strict-typechecked-preset-rule": "warn",
        "@typescript-eslint/other-ts-strict-typechecked-preset-rule": "error",
      },
    },
  },
};

declare type BadSvelteTest<Thruple> = Thruple extends [infer Inner, infer Inner, infer Inner] ? Inner : Thruple;
function badSvelteTest<Inner>(input: [Inner, Inner, Inner]): BadSvelteTest<[Inner, Inner, Inner]> {
  return input as BadSvelteTest<[Inner, Inner, Inner]>;
}

const badSvelte: SveltePluginBody = {
  configs: {
    "flat/all": badSvelteTest<Record<"rules", IRules>>(
      [
        { rules: { "svelte/ERROR-INDEX-ZERO-CONFIG-ACCESS?? SHOULD START FROM 1": "off" } },
        {
          rules: {
            "svelte/base-rule-svelte-plugin-design-is-poor": "error",
            "svelte/other-base-rule": "off",
          },
        },
        {
          rules: {
            "svelte/all-generator-rule-svelte-plugin-really-does-suck": "warn",
            "svelte/other-all-rule-so-annoying": "error",
          },
        },
      ],
    ),
  },
};

console.log(
  new Configs(
    {
      stylistic,
      files: ["eslint.config.js"],
    },
    {
      ts,
      parser: "@typescript-eslint/parser" as IParser<"@typescript-eslint/parser">,
      files: ["src/**/*.ts"],
    },
    {
      overrideJs: {
        "user-js-override-bogus": "off",
        "user-js-foober-babber": "warn",
      },
      overrideTs: {
        "@typescript-eslint/user-ts-override-bongo": "error",
        "@typescript-eslint/user-ts-bento-gento": "warn",
      },
    },
    {
      svelte: badSvelte,
      parser: "svelte" as SvelteParser,
      processor: "svelte/svelte" as SvelteProcessor,
      files: ["src/**/*.svelte"],
    },
  ).configs,
);
