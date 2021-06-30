import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './navigation/LoginNavigator';

const App = () => {

  return (
    <NavigationContainer>
      <LoginNavigator />
    </NavigationContainer>
  );
}

export default App;