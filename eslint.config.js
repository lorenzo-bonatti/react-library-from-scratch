import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import tsEslint from "typescript-eslint";

const SEVERITY = {
    ERROR: 2,
    OFF: 0,
    WARNING: 1,
};

export default tsEslint.config(
    eslint.configs.all,
    { ignores: ["node_modules", "dist"] },
    // TypeScript
    ...tsEslint.configs.strictTypeChecked,
    ...tsEslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    // React
    {
        files: ["src/*.{ts,tsx}"],
        ...reactPlugin.configs.flat.all,
        rules: {
            ...reactPlugin.configs.flat.all.rules,
            "react/jsx-filename-extension": [SEVERITY.WARNING, { extensions: [".tsx"] }],
            "react/react-in-jsx-scope": "off",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    // Prettier Overrides
    eslintPluginPrettierRecommended,
);
