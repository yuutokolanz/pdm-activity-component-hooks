import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Login() {
  const [text, setUsername] = React.useState("Username");
  const [password, setPassword] = React.useState("Password");

  return (
    <View>
      <TextInput 
        style={styles.input}
        onChangeText={setUsername}
        value={text}
      />
      <TextInput 
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title='Login'
        onPress={() => {
          console.log(text, password);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})