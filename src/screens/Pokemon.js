import React, { useEffect, useState } from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { getPokemonDetailsApi } from '../api/Pokemon';
import Header from '../components/Pokemon/Header';
import Stats from '../components/Pokemon/Stats';
import Type from './../components/Pokemon/Type';

export default function Pokemon(props) {
  const { navigation, route: { params }, } = props;
  const [pokemon, setPokemon] = useState(null);
  console.log(params.id);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        id={pokemon.id}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type
        types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}
