import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { Avatar } from 'react-native-paper'
import ButtonBox from '../component/ButtonBox'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation  = useNavigation()
    const logoutHanlder = () => {
        console.warn('Log Out')
    }
    const navigationHandler = (text) => {
        switch (text) {
            case "Admin":
                navigation.navigate('admin')
                break;

            case "Orders":
                navigation.navigate('order')
                break


            case "Profile":
                navigation.navigate('updateProfile')
                break;

            case "Password":
                navigation.navigate("changePassword")
                break;

            case "Sign Out":
                logoutHanlder()
                break;

            default:
                case "Orders":
                    navigation.navigate('order')
                    break



        }

    }


    



    const [avatar, setAvatar] = useState(null)
    const user = {
        name:'manish kumar',
        email:"manish@gmail.com"
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>

        <View style={{
            
        }}>
            <Avatar.Image source={{
                uri:avatar
            }} />
            <Text style={{
                color:'white'
            }}>{user.name}</Text>
            <Text style={{
                color:'white'
            }}>{user.email}</Text>


        </View>
        <View>
            <ButtonBox icon={'format-align-justify'} text={'Admin'} handler={navigationHandler}/>
            <ButtonBox icon={'view-dashboard'} text={'Orders'} handler={navigationHandler}/>
            <ButtonBox icon={'lead-pencil'} text={'Profile'} handler={navigationHandler}/>
            <ButtonBox icon={'archive-edit'} text={'Password'} handler={navigationHandler}/>
            <ButtonBox icon={'exit-to-app'} text={'Sign Out'} handler={navigationHandler}/>
            
        </View>


      



    </View>
  )
}

export default Profile