import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {

    const navigate = useNavigation()
    const isAuthenticated = true


    const Hanlder =(key) => {

        switch (key) {

            case 0:
                navigate.navigate('cart')
                break;
    
            case 1:
                navigate.navigate('home')
                break;
    
            case 2:
                if (isAuthenticated) navigate.navigate('profile')
                else navigate.navigate('login')
                break
    
    
            default:
                navigate.navigate('home')
                break
        }
    }
   
   


  return (
    <View style={{
        flexDirection:'row',
        alignContent:'space-between'
        
        
    }}>
      <TouchableOpacity onPress={() => Hanlder(2)}>
        <Avatar.Icon icon={'account'} />
      </TouchableOpacity>

      <TouchableOpacity style={{
        left:100
      }} onPress={() => Hanlder(1)}>
        <Avatar.Icon icon={'home'} />
      </TouchableOpacity>

      <TouchableOpacity style={{
        left:220
      }} onPress={() => Hanlder(0)}>
        <Avatar.Icon icon={'cart'} />
      </TouchableOpacity>
    </View>
  )
}

export default Footer