module.exports = {
  "root": true,
  "extends": [
    "semistandard",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": ["./tsconfig.json"] },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "space-before-function-paren": "off",
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        "allowString": false,
        "allowNumber": false
      }
    ]
  },
  "ignorePatterns": ["src/**/*.test.ts", "src/frontend/generated/*"]
}
