import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import useAuth from '../../hooks/useAuth'

export default function UserData() {

  const { auth, logout } = useAuth();


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
        <ItemMenu title="Total Favorites" text={`0 Pokemon`} />
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
