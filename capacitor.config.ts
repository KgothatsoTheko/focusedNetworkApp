import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.FourWMInnovations.focusNetworkApp',
  appName: 'focusNetworkApp',
  webDir: 'www',
  ios: {
    contentInset: 'always',
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'], // For displaying notifications in the foreground
    },
  },
};

export default config;
