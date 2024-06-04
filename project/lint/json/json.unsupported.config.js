const [ERROR] = ["error"];
const [NEVER] = ["never"];
const JsonUnsupported = {

  // JSONC Only
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
  "jsonc/no-comments": ERROR, // comments are not allowed in JSON
  "jsonc/comma-dangle": [
    ERROR,
    NEVER, // trailing commas are not allowed in JSON
  ],
};

export default JsonUnsupported;
