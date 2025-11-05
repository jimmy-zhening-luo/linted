declare module "eslint-plugin-jsonc/meta" {
}
declare module "eslint-plugin-jsonc/types" {
  export interface RuleModule<RuleOptions = unknown[]> {
    foo: RuleOptions;
  }
}
