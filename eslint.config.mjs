import parser from "@typescript-eslint/parser";

export default [{
  files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  ignores: [".next/**", "node_modules/**"],
  languageOptions: { parser, parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } } }
}];
