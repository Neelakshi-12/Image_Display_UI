import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageDisplay from './screens/ImageDisplay';
import SingleImageDisplay from './screens/SingleImageDisplay';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ImageDisplay">
        <Stack.Screen name="ImageDisplay" component={ImageDisplay} />
        <Stack.Screen
          name="SingleImageDisplay"
          component={SingleImageDisplay}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
