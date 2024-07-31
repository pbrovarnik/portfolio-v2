import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@context': path.resolve(__dirname, './src/context'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@src': path.resolve(__dirname, './src'),
		},
	},
});
