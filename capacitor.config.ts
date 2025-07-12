import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9591882d8f1f4216b12b7b4f5b9f84c1',
  appName: 'BusinessManager',
  webDir: 'dist',
  server: {
    url: 'https://9591882d-8f1f-4216-b12b-7b4f5b9f84c1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
      androidScaleType: 'CENTER_CROP',
      androidSplashResourceName: 'splash',
      splashFullScreen: true,
      splashImmersive: true,
      backgroundColor: 'hsl(240, 10%, 3.9%)'
    }
  }
};

export default config;