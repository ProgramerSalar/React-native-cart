import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {

    const isAuthenticated = true
    const navigate = useNavigation()
    const navigationHandler = (key) => {
        switch(key){
            case 1:
                navigate.navigate('home')
                break;

            case 2:
                navigate.navigate('cart')
                break;

            case 3:
                if (isAuthenticated) navigate.navigate('profile')
                else navigate.navigate('login')
                break;

            default:
                navigate.navigate('home')
                break;

        }
    }

  return (
    <View style={{
        
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'green',
        
      }}>

        <TouchableOpacity onPress={() => navigationHandler(3)} >
            <Avatar.Icon icon={'account'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigationHandler(1)}>
            <Avatar.Icon icon={'home'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigationHandler(2)}>
            <Avatar.Icon icon={'cart'} />
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Footer