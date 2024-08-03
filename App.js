import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import ISO from './components/Iso';
import CHAMBER from './components/Chamber';
import KILLJOY from './components/Killjoy';
import REYNA from './components/Reyna';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component= { Home} />
        <Drawer.Screen name="ISO" component= { ISO } />
        <Drawer.Screen name="CHAMBER" component= { CHAMBER } />
        <Drawer.Screen name="KILLJOY" component= { KILLJOY } />
        <Drawer.Screen name="REYNA" component= { REYNA } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


