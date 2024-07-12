module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'plugin:tailwindcss/recommended'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
};