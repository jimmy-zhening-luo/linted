export default class Config {
  public readonly export: IConfig;

  constructor(
    public readonly body: IConfig,
  ) {
    this.export = body;
  }
}
