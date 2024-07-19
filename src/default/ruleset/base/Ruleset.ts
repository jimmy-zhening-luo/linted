import Rule from "../rules/Rule.js";

export default class Ruleset<Language extends string> {
  public readonly ruleset: readonly Rule[];
  public readonly overrides: Rule[] = [];

  constructor(
    protected readonly language: literalful<Language>,
    ...ruleset: readonly Rule[]
  ) {
    this.ruleset = [...ruleset];
  }

  public get id() {
    return `ruleset:${this.language}` as const;
  }

  public get flat() {
    return [
      ...this.ruleset.map(
        rules => rules.rules,
      ),
      ...this.overrides.map(
        rules => rules.rules,
      ),
    ];
  }

  public override(...overrides: (undefined | IRule)[]) {
    this.overrides.push(
      ...overrides
        .filter(
          override => typeof override !== "undefined",
        )
        .map(
          override => new Rule(
            "override",
            override,
          ),
        ),
    );

    return this;
  }
}
