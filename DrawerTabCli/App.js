import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MemoryListScreen from './src/Screens/MemoryListScreen';
import {NavigationContainer} from '@react-navigation/native';
import StoreTabStackScreen from './src/Routers/StoreTabStackScreen';
import MainTabStackScreen from './src/Routers/MainTabStackScreen';
import DrawerStackScreen from './src/Routers/DrawerStackScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <DrawerStackScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
