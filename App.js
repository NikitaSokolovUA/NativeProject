import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useRoute } from './src/hooks/useRoute';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/Fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/Fonts/Roboto-Bold.ttf'),
  });
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const routing = useRoute(true);

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
