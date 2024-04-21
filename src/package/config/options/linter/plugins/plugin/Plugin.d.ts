import type Rules from "../../../../rules/Rules.js";

export default interface Plugin<
  PresetName extends string = never,
> {
  configs: PresetName extends never ? never : {
    [preset in PresetName]: {
      rules: Rules;
    };
  };
}
