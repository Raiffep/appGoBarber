import 'react-native-gesture-handler';

import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import { Colors } from './config/StyleConfigs';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#312e38" barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: Colors.backgroundColorBase }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
