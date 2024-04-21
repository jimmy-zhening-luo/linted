import type Rules from "../../rules/Rules.js";

export type Plugin<
  Pre extends string,
> = "" extends Pre
  ? null
  : {
      configs: {
        [preset in Pre]: {
          rules: Rules;
        };
      };
    };
