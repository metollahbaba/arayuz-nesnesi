
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.83af6119414a4168b57ad4828e2fffc3',
  appName: 'arayuz-nesnesi',
  webDir: 'dist',
  server: {
    url: 'https://83af6119-414a-4168-b57a-d4828e2fffc3.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'android.keystore',
      keystoreAlias: 'androiddebugkey',
      keystorePassword: 'android',
      keystoreAliasPassword: 'android'
    }
  }
};

export default config;
