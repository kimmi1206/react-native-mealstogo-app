import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
<<<<<<< HEAD
import { Navigation } from './src/infrastructure/navigation';
=======
import { useFonts } from 'expo-font';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Text } from 'react-native';
import { SafeAreaContainer } from './src/components/utility/safe-area.component';
import Ionicons from '@expo/vector-icons/Ionicons';
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyD6SoWEw71y1l6bDp0TyK8Xr71ymgHaaO0',
  authDomain: 'react-router-test-app.firebaseapp.com',
  databaseURL: 'https://react-router-test-app-default-rtdb.firebaseio.com',
  projectId: 'react-router-test-app',
  storageBucket: 'react-router-test-app.appspot.com',
  messagingSenderId: '759566613011',
  appId: '1:759566613011:web:9b5a9529a6aaaed7335de6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
<<<<<<< HEAD
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
=======
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator
          screenOptions={({ route }) => {
            let iconName;
            if (route.name === ROUTE[route.name]) {
              iconName = TAB_ICON[route.name];
            }
            return {
              tabBarIcon: () =>
                tabBarIconHandler({
                  iconName,
                  size: TAB_STYLE.Size,
                  color: TAB_STYLE.Color.Icon.Active,
                }),
              tabBarActiveTintColor: TAB_STYLE.Color.Text.Active,
              tabBarInactiveTintColor: TAB_STYLE.Color.Text.Inactive,
            };
          }}
        >
          <Tab.Screen name={ROUTE.Restaurants} component={RestaurantsScreen} />
          <Tab.Screen name={ROUTE.Map} component={Map} />
          <Tab.Screen name={ROUTE.Settings} component={Settings} />
        </Tab.Navigator>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
>>>>>>> parent of 1bda789 (added seach functionality / meals-to-go app)
  );
}
