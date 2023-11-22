import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Header = ({
    back, 
    emptyCart=true
}) => {

    const navigate = useNavigation()
  return (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between'

    }}>
        {
            back && (
                <TouchableOpacity onPress={() => navigate.goBack()}>
                <Avatar.Icon  icon={'arrow-left'} />
              </TouchableOpacity>
            )
        }

        <TouchableOpacity onPress={() =>  navigate.navigate('cart')}>
            <Avatar.Icon icon={'cart'} />
        </TouchableOpacity>


      

    </View>
  )
}

export default Header