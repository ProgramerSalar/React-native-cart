import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigation()
  return (
    <View style={{
        flex:1,
        backgroundColor:'green',
        margin:10,
        padding:10
    }}>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} />

      <Button style={{
        backgroundColor:'blue',
        padding:10,
        margin:10
      }} onPress={() => navigate.navigate('verify')}>Forgot Password</Button>
    </View>
  )
}

export default ForgotPassword