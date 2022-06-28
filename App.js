import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts } from 'expo-font';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { Text } from 'react-native';
import { SafeAreaContainer } from './src/components/utility/safe-area.component';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'restaurant-outline',
  Map: 'map-outline',
  Settings: 'settings-outline',
};

const TAB_STYLE = {
  Size: 24,
  Color: {
    Text: {
      Active: 'tomato',
      Inactive: 'gray',
    },
    Icon: { Active: 'darkblue', Inactive: 'lightgray' },
  },
};

const ROUTE = {
  Restaurants: 'Restaurants',
  Map: 'Map',
  Settings: 'Settings',
};

const Map = () => (
  <SafeAreaContainer>
    <Text>Map</Text>
  </SafeAreaContainer>
);
const Settings = () => (
  <SafeAreaContainer>
    <Text>Settings</Text>
  </SafeAreaContainer>
);

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const tabBarIconHandler = ({ iconName, size, color }) => {
    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
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
              <Tab.Screen
                name={ROUTE.Restaurants}
                component={RestaurantsScreen}
              />
              <Tab.Screen name={ROUTE.Map} component={Map} />
              <Tab.Screen name={ROUTE.Settings} component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
