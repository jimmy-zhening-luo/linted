declare module "eslint-plugin-jest" {
  export const configs: Record<
    "flat/recommended"
    ,
    Record<
      "rules"
      ,
      IRules
    >
  >;
}
