import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper'

const NewPassword = () => {
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState("")

  return (
    <View style={{
      flex:1,
      backgroundColor:'green',
      padding:10
    }}>
      <View style={{
        padding:10
      }}>
        <TextInput placeholder='Old Password' value={oldPassword} onChangeText={setOldPassword} />
        <TextInput placeholder='New Password' value={newPassword} onChangeText={setNewPassword} />
      </View>


      <TouchableOpacity>
        <Button style={{
          backgroundColor:'blue',
          borderRadius:10,
          padding:10,
          margin:10
        }}>Change Password</Button>
      </TouchableOpacity>
    </View>
  )
}

export default NewPassword