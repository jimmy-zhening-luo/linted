import Rule from "../Rule.js";
import {
  ERROR,
  OFF,
  ALL,
  ALWAYS,
} from "../state.js";
import { EnableX } from "../id.js";

const TsEnableX = new Rule(
  EnableX,
  {

    // https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
    "@typescript-eslint/class-methods-use-this": OFF, /* preference -- eslint:off */
    "@typescript-eslint/consistent-return": OFF, /* tsconfig: noImplicitReturns */
    "@typescript-eslint/default-param-last": ERROR,
    "@typescript-eslint/dot-notation": [
      ERROR,
      {
        allowKeywords: true,

        // TS-only
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    "@typescript-eslint/init-declarations": [
      ERROR,
      ALWAYS,
    ],
    "@typescript-eslint/max-params": OFF, /* preference */
    "@typescript-eslint/no-array-constructor": ERROR,
    "@typescript-eslint/no-dupe-class-members": OFF, /* tsc */
    "@typescript-eslint/no-empty-function": [
      ERROR,
      {
        allow: [
          "constructors",
          "private-constructors",
          "protected-constructors",
          "decoratedFunctions",
        ],
      }, // functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: private-constructors, protected-constructors, decoratedFunctions, overrideMethods
    ],
    "@typescript-eslint/no-implied-eval": ERROR,
    "@typescript-eslint/no-invalid-this": OFF, /* tsconfig: { strict, noImplicitThis } */
    "@typescript-eslint/no-loop-func": ERROR,
    "@typescript-eslint/no-loss-of-precision": ERROR,
    "@typescript-eslint/no-magic-numbers": OFF,
    "@typescript-eslint/no-redeclare": OFF, /* tsc (let, const, -var) */
    "@typescript-eslint/no-restricted-imports": OFF, /* preference */
    "@typescript-eslint/no-shadow": OFF, /* investigate */
    "@typescript-eslint/no-unused-expressions": [
      ERROR,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      ERROR,
      {
        vars: ALL,
        args: ALL,
        caughtErrors: ALL,
        ignoreRestSiblings: false,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      ERROR,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: false, /* changed 14.2.2 (still questionable) */
        ignoreTypeReferences: true,
      },
    ],
    "@typescript-eslint/no-useless-constructor": ERROR,
    "@typescript-eslint/only-throw-error": [
      ERROR,
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    "@typescript-eslint/prefer-destructuring": [
      ERROR,
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
        enforceForDeclarationWithTypeAnnotation: false,
      },
    ],
    "@typescript-eslint/prefer-promise-reject-errors": [
      ERROR,
      { allowEmptyReject: false },
    ],
    "@typescript-eslint/require-await": ERROR,
    "@typescript-eslint/return-await": [
      ERROR,
      "in-try-catch",
    ],
  },
);

export default TsEnableX;
