import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper'

const UpdateProfile = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  return (
    <View style={{
      backgroundColor:'green',
      flex:1
    }}>
      <View style={{
        padding:10,
        margin:10
      }}>
        <TextInput placeholder='Name' value={name} onChangeText={setName} />
        <TextInput placeholder='Email' value={email} onChangeText={setEmail} />

      
      </View>
      <TouchableOpacity >
        <Button style={{
          backgroundColor:'blue',
          borderRadius:10,
          padding:5,
          margin:10
        }}>Update Profile</Button>
      </TouchableOpacity>
    
    </View>
  )
}

export default UpdateProfile