import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import getcolorByPokemonType from '../utils/GetColorByPokemonType';

export default function PokemonCard(props) {
  const { pokemon } = props;


  const bgStyles = { backgroundColor: "#f0f", ...styles.bgStyles }

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.name}}`);

  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
            <Text style={styles.name}> {pokemon.name} </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontySize: 11,
  },
  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,

  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  }
})
