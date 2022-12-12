import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

export default function Favorite(props) {
  const { id } = props;

  // const [isFavorite, setIsFavorite] = useState(undefined);
  // console.log(isFavorite);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await isPokemonFavoriteApi(id);
  //       setIsFavorite(response)
  //     } catch (error) {
  //       setIsFavorite(false)
  //     }
  //   })()
  // }, [id]);

  const addFavorite = async () => {
    console.log('añadir a favoritos', id);
    // await addPokemonFavoriteApi(id)
    // };
    // const removeFavorite = () => {
    //   console.log("Eliminar de favoritos");
  };

  return (

    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{
        marginRight: 20
      }}
    />
  );
}
