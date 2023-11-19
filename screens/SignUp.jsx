import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passwod, setPassword] = useState("")
    const navigate = useNavigation()
    



  return (
    <View style={{
        flex:1,
        backgroundColor:'green',
        padding:10,
        margin:10
    }}>
      <View>
        <TextInput placeholder='Name' value={name} onChangeText={setName}/>
        <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
        <TextInput placeholder='Password' value={passwod} onChangeText={setPassword}/>

      </View>

      <Button style={{
        backgroundColor:'blue',
        padding:10,
        margin:10
      }}>Sign UP</Button>

      <TouchableOpacity onPress={() => navigate.navigate('login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp