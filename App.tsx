import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="StationsList" component={StationsListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const StationsListScreen = () => {
  return (
    <View>
      <Text>Stations list</Text>
    </View>
  )
}

const PlayerScreen = () => {
  return (
    <View>
      <Text>Player</Text>
    </View>
  )
}

export default App;
