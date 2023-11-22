import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ModalItem = ({
    setMyModal,
    Mymodal
}) => {

    const handler = () => {
        setMyModal(false)
    }
    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor:'white',
        height:80,
        width:250,
        padding:10,
        margin:10,
        right:-50,
        borderRadius:10
    }}>
        <TouchableOpacity style={{
            left:-60,
            top:-10,
            flex:1
        }} onPress={handler}>
        <Avatar.Icon icon={'close'} size={40}  />
        </TouchableOpacity>

        <View style={{
            left:100,
            top:-40
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('updateProduct')}>
            <Text style={{
                backgroundColor:'green',
                width:120,
                borderTopRightRadius:10,
                borderBottomRightRadius:10,
            
            }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{
                backgroundColor:'green',
                width:120,
                top:20,
                borderTopRightRadius:10,
                borderBottomRightRadius:10
            }}>Delete</Text>
            </TouchableOpacity>
            
           
        </View>
      




    </View>
  )
}

export default ModalItem