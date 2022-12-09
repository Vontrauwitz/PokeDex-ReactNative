import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Favorites from '../screens/Favorites';


const Stack = createStackNavigator();
 
export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Favorites" 
      component={Favorites} 
        options={{
          title:" Favorites"
        }}
      />
    </Stack.Navigator>
  )
}
