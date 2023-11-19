import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Verify = () => {
    const [otp, setotp] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigation()
  return (
    <View style={{
        flex:1,
        backgroundColor:'green',
        margin:10,
        padding:10
    }}>
      <TextInput placeholder='OTP' value={otp} onChangeText={setotp} />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} />

      <Button style={{
        backgroundColor:'blue',
        padding:10,
        margin:10
      }} >Verify</Button>
    </View>
  )
}

export default Verify