module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  env: {
    node: true
  },
  extends: [
    "airbnb-typescript/base",
  ],
  // add your custom rules here
  rules: {
    "max-len": "warn",
    "newline-before-return": "error",
    "import/no-cycle": "warn",
    "arrow-parens": ["error", "always"],
    "no-undef": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "error",
    "no-restricted-globals": "off",
    "import/prefer-default-export": "off",
  },
  overrides: [
    // to allow methods overload in typescript
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-dupe-class-members": "off"
      }
    }
  ]
};
