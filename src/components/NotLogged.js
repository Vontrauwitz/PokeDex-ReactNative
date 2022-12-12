import { StyleSheet, View, Text, Button, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NotLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <View style={styles.image}>
        <Image source={require('../assets/Pokemonapp30.png')} />
      </View>

      <Text style={styles.text}>
        Welcome traveler, to be able to see your favorite pokemons ❤️ you need to be logged
      </Text>
      <View style={styles.btn}>
        <Button title='Let´s go' onPress={() => navigation.navigate("Account")} />
      </View>
    </View>
  )
}


const styles
  = StyleSheet.create({
    content: {
      marginVertical: 50,
      paddingHorizontal: 20,
    },
    image: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 50,
      marginTop: 30,
    },
    text: {
      textAlign: "center",
      marginBottom: 40,
    },
    btn: {
      paddingHorizontal: 60,

    }
  })
