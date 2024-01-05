/** @format */

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "newsapp",
  webDir: "dist",
  server: {
    androidScheme: "http",
  },
  plugins: {
    App: {
      iosScheme: "ionicframework.com",
    },
  },
};

export default config;
