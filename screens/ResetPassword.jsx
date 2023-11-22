import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { TextInput, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ResetPassword = () => {

    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword]  = useState("")
    
  return (
    <View style={{
        backgroundColor:'grey',
        flex:1
    }}>

<View style={{
            padding:10,
            margin:10
        }}>
            <TextInput placeholder='OTP' style={{
                margin:10
            }} value={otp} onChangeText={setOtp} />
            <TextInput placeholder='New Password' style={{
                margin:10
            }} value={newPassword} onChangeText={setNewPassword} />
        </View>

        

        <TouchableOpacity>
            <Button style={{
                backgroundColor:'blue',
                padding:10,
                margin:10
            }}>Reset Password</Button>
        </TouchableOpacity>

        
    </View>
  )
}

export default ResetPassword