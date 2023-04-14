

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Ceo from "./src/utils/ceo";

// https://vitejs.dev/config/
export default defineConfig( {
	base: "/vite-app/",
	plugins: [ react() ],
	server: {
		port: gate,
		host: true
	}
} );
