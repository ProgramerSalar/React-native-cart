import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({
    index,
    name,
    id,
    price,
    stock,
    image
}) => {

    const navigate = useNavigation()
  return (
    <View
    style={{
        backgroundColor:index % 2 === 0 ? 'green' : 'red',
        margin:20,
        padding:20,
        borderRadius:10,
        width:200,
        height:320

    }}>
        <TouchableOpacity onPress={() => navigate.navigate('productdetails')}>
        <Image 
        source={{ 
            uri:image
        }}
        style={{
            height:220,
            width:220,
            borderRadius:10,
            margin:20
        }}
        />
        </TouchableOpacity>
        
        <Text style={{
            color:'white'
        }}>{name}</Text>
        <Text style={{
            color:'white'
        }}>Price:  ${price}</Text>
       
      
    </View>
  )
}

export default ProductCard