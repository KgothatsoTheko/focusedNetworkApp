import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.FourWMInnovations.focusNetworkApp',
  appName: 'Focused Network',
  webDir: 'www',
  // ios: {
  //   contentInset: 'always',
  // },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'], // For displaying notifications in the foreground
    },
    SplashScreen: {
      launchShowDuration: 3000,
      backgroundColor: "#fff",
      showSpinner: false,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
