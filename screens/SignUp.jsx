import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {

    const [name, setName] = useState("")
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
            <TextInput placeholder='Name' style={{
                margin:10
            }} value={name} onChangeText={setName} />
            <TextInput placeholder='Email' style={{
                margin:10
            }} value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' style={{
                margin:10
            }} value={password} onChangeText={setPassword} />
        </View>

       

        <TouchableOpacity>
            <Button style={{
                backgroundColor:'blue'
            }}>Sign Up</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')} style={{
            left:300,
            top:10
        }} >
            <Text>Login?</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default SignUp