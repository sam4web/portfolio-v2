import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	server: {
		http: 'http://localhost',
		port: 3000,
	},
});
