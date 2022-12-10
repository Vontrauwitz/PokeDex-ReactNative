import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, Keyboard, } from 'react-native'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { initial } from 'lodash';
import { userDetails, user } from '../../utils/userDB';


export default function LoginForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    // validateOnChange: false, validación hasta que das enter
    onSubmit: (formValue) => {
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        console.log("the user or password are wrong");
      } else {
        console.log("welcome");
      }

    }
  })

  return (
    <View>
      <Text style={styles.title}>Log-In</Text>
      <TextInput
        placeholder='UserName'
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <TextInput
        placeholder='Password'
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Button
        title="Enter" onPress={formik.handleSubmit}
      />

    </View>
  )
}

function initialValues() {
  return {
    username: "",
    password: "",
  }
}

function validationSchema() {
  return {
    username: Yup.string().required("Invalid User"),
    password: Yup.string().required("Password invalid")
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
})
