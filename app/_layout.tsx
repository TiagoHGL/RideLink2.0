import 'react-native-get-random-values';
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import * as Location from 'expo-location';
import { Platform, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AutoFillProvider } from '@/contexts/AutoFillContext';
import { SplashScreen as CustomSplashScreen } from '@/components/SplashScreen';

SplashScreen.preventAutoHideAsync();

// Global error handlers
if (Platform.OS === 'web') {
  // Handle unhandled promise rejections on web
  window.addEventListener('unhandledrejection', (event) => {
    console.error('🚨 Unhandled Promise Rejection:', event.reason);
    console.error('Promise:', event.promise);
    console.error('Stack trace:', event.reason?.stack || 'No stack trace available');
    
    // Prevent the default browser behavior
    event.preventDefault();
    
    // Show user-friendly error message
    const errorMessage = event.reason?.message || event.reason?.toString() || 'Unknown error occurred';
    console.warn('User-friendly error:', errorMessage);
  });

  // Handle uncaught errors on web
  window.addEventListener('error', (event) => {
    console.error('🚨 Uncaught Error:', event.error);
    console.error('Message:', event.message);
    console.error('Filename:', event.filename);
    console.error('Line:', event.lineno);
    console.error('Column:', event.colno);
  });
} else {
  // Handle unhandled promise rejections on mobile
  const originalHandler = global.ErrorUtils?.getGlobalHandler?.();
  
  global.ErrorUtils?.setGlobalHandler?.((error, isFatal) => {
    console.error('🚨 Global Error Handler:', error);
    console.error('Is Fatal:', isFatal);
    console.error('Stack trace:', error?.stack || 'No stack trace available');
    
    // Call original handler if it exists
    if (originalHandler) {
      originalHandler(error, isFatal);
    }
  });
}

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  const [isAppReady, setIsAppReady] = useState(false);
  const [showInitialSplash, setShowInitialSplash] = useState(true);

  // Request location permission on app startup with proper error handling
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'web') {
          // For web, we'll handle geolocation permission when needed
          console.log('🌐 Web platform - location permission will be requested when needed');
          return;
        }

        console.log('📍 Requesting location permission on app startup...');
        const { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status === 'granted') {
          console.log('✅ Location permission granted');
          
          // Optionally get current location silently in background
          try {
            const location = await Location.getCurrentPositionAsync({
              accuracy: Location.Accuracy.High,
              timeout: 10000,
              maximumAge: 30000,
            });
            console.log('📍 Initial location obtained:', {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            });
          } catch (locationError) {
            console.log('⚠️ Could not get initial location:', locationError);
            // Don't throw here, just log the error
          }
        } else {
          console.warn('❌ Location permission denied');
        }
      } catch (error) {
        console.error('❌ Error requesting location permission:', error);
        // Don't throw here, just log the error
      }
    };

    // Execute with proper error handling
    requestLocationPermission().catch((error) => {
      console.error('❌ Failed to request location permission:', error);
    });
  }, []);

  // Initialize app only once when fonts are loaded
  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (fontsLoaded || fontError) {
          // Hide the native splash screen
          await SplashScreen.hideAsync();
          setIsAppReady(true);
        }
      } catch (error) {
        console.error('❌ Error initializing app:', error);
        // Continue anyway, don't block the app
        setIsAppReady(true);
      }
    };

    if (!isAppReady && (fontsLoaded || fontError)) {
      initializeApp().catch((error) => {
        console.error('❌ Failed to initialize app:', error);
        setIsAppReady(true);
      });
    }
  }, [fontsLoaded, fontError, isAppReady]);

  // Handle custom splash screen completion - only show on initial load
  const handleSplashComplete = () => {
    setShowInitialSplash(false);
  };

  // Show custom splash screen ONLY during the very first app load
  // Once fonts are loaded and app is ready, but still showing initial splash
  if (!isAppReady) {
    // Still loading fonts or initializing - don't show anything yet
    return null;
  }

  if (showInitialSplash) {
    // App is ready but we want to show our custom splash animation once
    return <CustomSplashScreen onAnimationComplete={handleSplashComplete} />;
  }

  // App is fully ready and splash has completed - render the main navigation
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <AutoFillProvider>
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </Stack>
            </AutoFillProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}