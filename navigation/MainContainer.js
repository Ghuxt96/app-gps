import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import RefreshScreen from './screens/RefreshScreen';
import MapScreen from './screens/MapScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const RefreshName = "Refrescar";
const MapsName = "Mapa";
const settingsName = "Usuario";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={MapsName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === RefreshName) {
              iconName = focused ? 'refresh-circle-sharp' : 'refresh-circle-outline';

            } else if (rn === MapsName) {
              iconName = focused ? 'earth' : 'earth-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0066CC',  
          inactiveTintColor: '#A0A0A0',
          labelStyle: { paddingBottom: 10, fontSize: 11 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={RefreshName} component={RefreshScreen} />
        <Tab.Screen name={MapsName} component={MapScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;