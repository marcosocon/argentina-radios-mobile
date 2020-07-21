import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TrackPlayer from 'react-native-track-player';


import { HomeScreen } from './src/screens/HomeScreen';
import { PlayerScreen } from './src/screens/PlayerScreen';
import { StationsScreen } from './src/screens/StationsScreen';
import { PlayerService } from './src/services/PlayerService';

const Stack = createStackNavigator();

const track = {
  id: '1',
  url:
    'https://cdn.simplecast.com/audio/05bd32/05bd32de-6cd4-40f6-b3bd-0bdf6750dd58/9b70bc7c-6bcc-48e7-8265-90089d7a1ed3/141_tc.mp3?aid=rss_feed',
  title: '141: Jason Fried - Running the Tailwind Business on Basecamp',
  artist: 'Full Stack Radio',
};

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('player is setup');
      });

      TrackPlayer.registerPlaybackService(() => PlayerService);

      await TrackPlayer.add([track]);

      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 2000);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Player" component={PlayerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StationsList" component={StationsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
