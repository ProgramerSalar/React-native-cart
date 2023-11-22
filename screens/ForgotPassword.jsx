import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("")
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
        </View>

        

        <TouchableOpacity onPress={() => navigation.navigate('resetPassword') }>
            <Button style={{
                backgroundColor:'blue'
            }}>Forgot Password</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('signUp')} style={{
            left:300,
            top:10
        }} >
            <Text>sign Up?</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default ForgotPassword