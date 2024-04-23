import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("airbnb-base"),
  {
    rules: {
      // Require or disallow the use of semicolons instead of ASI
      semi: ["error", "always"],
      // Enforce consistent indentation
      indent: ["error", 2],
      // Enforce consistent spacing before function parentheses
      "space-before-function-paren": ["error", "always"],
      // Require a space after keywords like if, else, for, etc.
      "keyword-spacing": "error"
    }
  }
];
