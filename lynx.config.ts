import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  plugins: [
    pluginQRCode(),
    pluginReactLynx(),
    pluginSass(),
  ],
  output: {
    dataUriLimit: Infinity,
  },
  environments: {
    web: {},
    lynx: {},
  },
});