const [
  ,
  OFF,
] = [
  "error",
  "off",
] as const;
const HtmlEnable: IRules = { "@html-eslint/require-title": OFF };

export default HtmlEnable;
