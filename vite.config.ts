import dts from "vite-plugin-dts";
import { name } from "./package.json";
import react from "@vitejs/plugin-react-swc";

export default {
    build: {
        lib: {
            entry: "./src/index.ts",
            formats: ["es"],
            name,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
        },
    },
    plugins: [dts({ rollupTypes: true }), react()],
};
