import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { size } from 'lodash'
import useAuth from '../../hooks/useAuth'
import { getPokemonsFavoriteApi } from "../../api/favorite"

export default function UserData() {

  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi()
          setTotal(size(response))
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Image source={require('../../assets/welcomepkm22.png')} />
        {/* <Text style={styles.title}>Welcome,</Text> */}
        <Text style={styles.title}>{
          `${auth.firstName} ${auth.lastName}`
        }</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={`${auth.username}`} />
        <ItemMenu title="Email" text={`${auth.email}`} />
        <ItemMenu title="Total Favorites" text={`${total} Pokemons`} />
      </View>
      <View style={styles.btnLogout}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
})
