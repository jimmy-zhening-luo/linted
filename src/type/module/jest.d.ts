declare module "eslint-plugin-jest" {
  export const configs: Record<
    "flat/style"
    ,
    Record<
      "rules"
      ,
      IRules
    >
  >;
}
