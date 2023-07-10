import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target: "http://localhost:8000",
			},
		},
	},
	plugins: [react()],
	build: {
		outDir: 'dist',
		assetsDir: '',
		minify: 'terser',
		sourcemap: false,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: './index.html',
			},
		},
	}
});
