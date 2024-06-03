const [ERROR] = ["error"] as const;
const JsonEnable: IRules = {

  // JSONC Only
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
  "jsonc/no-comments": ERROR, // override in JSON
};

export default JsonEnable;
