import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
// import { useFonts } from 'expo-font';
// import { Oswald_400Regular } from '@expo-google-fonts/oswald';
// import { Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
  // let [fontsLoaded] = useFonts({
  //   Oswald_400Regular,
  //   Lato_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
