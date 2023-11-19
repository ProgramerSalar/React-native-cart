import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Header = ({back, emptyCart=true}) => {

    const navigate = useNavigation()
  return (
    <View style={{
        flex:1,
        flexDirection:'row',
        
    }}>
 {
        back && (
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <Avatar.Icon icon={'arrow-left'} />
            </TouchableOpacity>
        )
    }
    <TouchableOpacity onPress={() => navigate.navigate('cart')} style={{
        left:280
    }}>
        <Avatar.Icon icon={'cart'} />
    </TouchableOpacity>
    </View>
   
  )
}

export default Header