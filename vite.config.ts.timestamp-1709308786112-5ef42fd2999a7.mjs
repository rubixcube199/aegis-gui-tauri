// vite.config.ts
import { defineConfig } from "file:///home/mw/Desktop/aegis-gui-tauri/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/mw/Desktop/aegis-gui-tauri/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
var vite_config_default = defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  // env variables
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG
  },
  plugins: [svelte()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tdy9EZXNrdG9wL2FlZ2lzLWd1aS10YXVyaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbXcvRGVza3RvcC9hZWdpcy1ndWktdGF1cmkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbXcvRGVza3RvcC9hZWdpcy1ndWktdGF1cmkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIHByZXZlbnQgdml0ZSBmcm9tIG9ic2N1cmluZyBydXN0IGVycm9yc1xuICBjbGVhclNjcmVlbjogZmFsc2UsXG4gIC8vIFRhdXJpIGV4cGVjdHMgYSBmaXhlZCBwb3J0LCBmYWlsIGlmIHRoYXQgcG9ydCBpcyBub3QgYXZhaWxhYmxlXG4gIHNlcnZlcjoge1xuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gIH0sXG4gIC8vIHRvIG1ha2UgdXNlIG9mIGBUQVVSSV9QTEFURk9STWAsIGBUQVVSSV9BUkNIYCwgYFRBVVJJX0ZBTUlMWWAsXG4gIC8vIGBUQVVSSV9QTEFURk9STV9WRVJTSU9OYCwgYFRBVVJJX1BMQVRGT1JNX1RZUEVgIGFuZCBgVEFVUklfREVCVUdgXG4gIC8vIGVudiB2YXJpYWJsZXNcbiAgZW52UHJlZml4OiBbJ1ZJVEVfJywgJ1RBVVJJXyddLFxuICBidWlsZDoge1xuICAgIC8vIFRhdXJpIHVzZXMgQ2hyb21pdW0gb24gV2luZG93cyBhbmQgV2ViS2l0IG9uIG1hY09TIGFuZCBMaW51eFxuICAgIHRhcmdldDogcHJvY2Vzcy5lbnYuVEFVUklfUExBVEZPUk0gPT0gJ3dpbmRvd3MnID8gJ2Nocm9tZTEwNScgOiAnc2FmYXJpMTMnLFxuICAgIC8vIGRvbid0IG1pbmlmeSBmb3IgZGVidWcgYnVpbGRzXG4gICAgbWluaWZ5OiAhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcgPyAnZXNidWlsZCcgOiBmYWxzZSxcbiAgICAvLyBwcm9kdWNlIHNvdXJjZW1hcHMgZm9yIGRlYnVnIGJ1aWxkc1xuICAgIHNvdXJjZW1hcDogISFwcm9jZXNzLmVudi5UQVVSSV9ERUJVRyxcbiAgfSxcbiAgcGx1Z2luczogW3N2ZWx0ZSgpXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtSLFNBQVMsb0JBQW9CO0FBQy9TLFNBQVMsY0FBYztBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLGFBQWE7QUFBQTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFdBQVcsQ0FBQyxTQUFTLFFBQVE7QUFBQSxFQUM3QixPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVEsUUFBUSxJQUFJLGtCQUFrQixZQUFZLGNBQWM7QUFBQTtBQUFBLElBRWhFLFFBQVEsQ0FBQyxRQUFRLElBQUksY0FBYyxZQUFZO0FBQUE7QUFBQSxJQUUvQyxXQUFXLENBQUMsQ0FBQyxRQUFRLElBQUk7QUFBQSxFQUMzQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUNwQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=