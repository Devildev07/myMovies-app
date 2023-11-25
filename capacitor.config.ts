import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myMovies-app',
  webDir: 'www\browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
