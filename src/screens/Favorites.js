import React, { useState, useCallback } from 'react'
import { Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/Pokemon'
import useAuth from '../hooks/useAuth'
import PokemonList from './../components/PokemonList';


export default function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          // console.log(response);
          const pokemonsArray = [];
          for await (const id of response) {

            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray)
        })()
      }

    }, [auth])
  )


  return !auth ? (
    <Text>User not Logged</Text>
  ) : (
    // <PokemonList pokemons={pokemons} />
    <PokemonList pokemons={pokemons} />
  );
}
