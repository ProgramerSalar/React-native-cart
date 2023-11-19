import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

const ChangePassword = () => {

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")






  return (
    <View style={{
      flex:1,
      backgroundColor:'green'
    }}>
      <View style={{
        padding:10,
        margin:10
      }}>
        <TextInput placeholder='Old Password' value={oldPassword} onChangeText={setOldPassword} />
        <TextInput placeholder='New Password' value={newPassword} onChangeText={setNewPassword} />

        <Button style={{
          backgroundColor:'blue',
          margin:10
        }}>Change Password</Button>
      </View>
    </View>
  )
}

export default ChangePassword