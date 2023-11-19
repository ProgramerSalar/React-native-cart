import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ConfirmOrder = () => {

    const navigate = useNavigation()
    const quantity = 3
    const amount = 1200
    const tax = 0.18 * amount
    const total = amount + tax * 3

    const paymentHandler = () => {
        navigate.navigate('payment')

    }


  return (
    <View style={{
        backgroundColor:'green',
        flex:1
    }}>
        <View>
            <Text>Quantity: {quantity}</Text>
            <Text>Amount: {amount}</Text>
            <Text>Tax: {tax}</Text>
            <Text>Total: {total}</Text>



        </View>
        <View>
            <TouchableOpacity onPress={paymentHandler}>
                <Button style={{ backgroundColor: 'blue'}}>Payment</Button>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ConfirmOrder