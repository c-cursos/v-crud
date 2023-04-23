

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ceo from "./src/utils/ceo";

// https://vitejs.dev/config/
export default defineConfig( {
	base: "/",
	plugins: [ react() ],
	server: {
		port: ceo.gate,
		// host: true
		host: "127.0.0.2",
	}
} );
