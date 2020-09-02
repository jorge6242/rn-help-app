import * as React from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/containers/Home';
import Login from './src/components/Login';
import BottomTabNavigator from './src/navigation/BottomTabNavigatior';
import CreateStore from './src/config/store';

const store = CreateStore();
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
