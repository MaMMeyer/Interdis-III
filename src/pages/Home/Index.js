import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Feed from '../Apresent/Apresent';
import New from '../../screens/New';
import Galeria from '../../screens/Galeria';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Apresent"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Inicio',
        }}
      />

      <Tab.Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
          tabBarLabel: 'Novo',
          unmountOnBlur: true,
        }}
      />

      <Tab.Screen
        name="Galeria"
        component={Galeria}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="book" color={color} size={size} />,
          tabBarLabel: 'Galeria',
        }}
      />
    </Tab.Navigator>
  );
}
