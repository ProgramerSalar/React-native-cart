import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

  return (
    <View style={{
        backgroundColor:'grey',
        flex:1,
        padding:10
    }}>

        <View style={{
            padding:10,
            margin:10
        }}>
            <TextInput placeholder='Email' style={{
                margin:10
            }} value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' style={{
                margin:10
            }} value={password} onChangeText={setPassword} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('forgotPassword') } style={{
            top:-20
        }}>
            <Text>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Button style={{
                backgroundColor:'blue'
            }}>Login</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('signUp')} style={{
            left:300,
            top:10
        }} >
            <Text>sign Up</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Login