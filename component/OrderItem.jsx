import { View, Text } from 'react-native'
import React from 'react'

const OrderItem = ({
    id,
    index,
    address
}) => {
  return (
    <View>
        <Text>ID:{id}</Text>
        <Text>{address}</Text>
     
    </View>
  )
}

export default OrderItem