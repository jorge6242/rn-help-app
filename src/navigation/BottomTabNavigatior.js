import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenThree from '../screens/ScreenThree';
import Settings from '../screens/Settings';
import Location from '../screens/Location/indes';
import Chat from '../screens/Chat/indes';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cog" size={size} color={color} />
          ),
        }}
        name="Ajustes"
        component={Settings}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="send" size={size} color={color} />
          ),
        }}
        component={Location}
      />
            <Tab.Screen
        name="Chat"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list-alt" size={size} color={color} />
          ),
        }}
        component={Chat}
      />
    </Tab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
      <Tabs />
  );
}

export default BottomTabNavigator;
