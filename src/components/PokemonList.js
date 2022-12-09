import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNextUrl } = props;

  console.log(Platform.OS);

  const loadMore = () => {
    loadPokemons()
  }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentContainer}
      onEndReached={isNextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNextUrl && (
          < ActivityIndicator
            size="large"
            color="#AEAEAE"
            style={styles.spinner}
          />
        )
      }
    />
  )
}


const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  spinner: {
    marginVertical: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,

  }
})
