import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getPokemonsFavoriteApi } from '../api/favorite'


export default function Favorites() {

  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  }



  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title='Obtener Favoritos' onPress={checkFavorites} />
    </SafeAreaView>
  )
}
