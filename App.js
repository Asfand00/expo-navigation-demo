import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserProfilePage from './pages/UserProfilePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="UserProfile" component={UserProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
