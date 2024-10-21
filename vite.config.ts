// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0",
//   },
//   resolve: {
//     alias: {
//       buffer: 'buffer/',
//     },
//   },
//   define: {
//     'process.env': {},
//   },
// });




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills() // Add this line
  ],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      buffer: 'buffer/',
    },
  },
  define: {
    'process.env': {},
  },
});
