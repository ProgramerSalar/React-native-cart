import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const UpdateProfile = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  

  return (
    <View style={{
      backgroundColor:'green',
      flex:1,
      padding:10,
      margin:10
    }}>
      <TextInput placeholder='Name' value={name} onChangeText={setName} />
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} />

      <Button style={{
        padding:10,
        backgroundColor:'blue',
        margin:10
      }}>Update Profile</Button>
    </View>
    
  )
}

export default UpdateProfile