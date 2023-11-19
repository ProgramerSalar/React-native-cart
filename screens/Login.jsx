import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigate = useNavigation()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const forgotPassword = () => {
        navigate.navigate('forgotPassword')

    }

    const signUp = () => {
        navigate.navigate('signUp')
    }


  return (
    <View style={{
        backgroundColor:'green',
        flex:1,
        padding:10
    }}>

        <TextInput placeholder='Email' value={email} onChangeText={setEmail} />
        <TextInput placeholder='Password' value={password} onChangeText={setPassword} />

        <TouchableOpacity onPress={forgotPassword}>
            <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <Button style={{
            margin:10, 
            backgroundColor:'blue'
        }}>Login</Button>

        <TouchableOpacity onPress={signUp}>
            <Text>Sign Up</Text>
        </TouchableOpacity>



      
    </View>
  )
}

export default Login