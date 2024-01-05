import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/TabNavigator';



function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
}




export default App;