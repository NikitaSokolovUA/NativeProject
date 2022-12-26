import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Main from './src/Components/Main';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
          'Roboto-Medium': require('./assets/Fonts/Roboto-Medium.ttf'),
          'Roboto-Bold': require('./assets/Fonts/Roboto-Bold.ttf'),
        });
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Main />
      </View>
    </Provider>
  );
}
