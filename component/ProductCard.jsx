import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const ProductCard = ({
    index,
    price,
    stock,
    name,
    image,
    description,

}) => {

    const navigate = useNavigation()
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigate.navigate('productdetails')}>
        <Image source={{ uri: image }} style={{
            height:80,width:80
        }} />
        </TouchableOpacity>
        
        <Text>{name}</Text>
        <Text>${price}</Text>
        <Text>{stock}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  )
}

export default ProductCard