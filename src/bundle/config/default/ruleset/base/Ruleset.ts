import Rules from "../rules/Rules.js";

export default class Ruleset<
  Language extends string,
> {
  public readonly ruleset: readonly Rules[];
  public overrides: Rules[] = [];

  constructor(
    protected readonly language: literalful<
      Language
    >,
    ...ruleset: readonly Rules[]
  ) {
    this
      .ruleset = [...ruleset];
  }

  public get name() {
    return `language:${
      this
        .language
    }` as const;
  }

  public get flat() {
    return [
      ...this
        .ruleset
        .map(
          rules =>
            rules
              .rules,
        ),
      ...this
        .overrides
        .map(
          rules =>
            rules
              .rules,
        ),
    ];
  }

  public override(
    ...overrides: Array<undefined | RuleSpec>
  ) {
    this
      .overrides
      .push(
        ...overrides
          .filter(
            override =>
              typeof override !== "undefined",
          )
          .map(
            override =>
              new Rules(
                "override",
                override,
              ),
          ),
      );

    return this;
  }
}
