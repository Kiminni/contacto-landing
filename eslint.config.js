import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				// Node.js 환경을 위해 추가
				...globals.node,
			},
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			"react/react-in-jsx-scope": "off",
		},
	},
];
