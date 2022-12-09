import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome5"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from "react-native"
import FavoritesNavigation from './FavoritesNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';


const Tab = createBottomTabNavigator()


export default function Navigation() {
  return (

    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          )
        }} />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball()
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "My profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          )
        }}
      />

    </Tab.Navigator>

  )
}



function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -17 }}
    />
  )
}
