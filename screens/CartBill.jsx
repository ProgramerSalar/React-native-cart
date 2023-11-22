import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { Avatar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const CartBill = () => {
  const price = 1200;
  const quantity = 3;
  const tax = price * 0.18;
  const delevery_carge = price / 10;
  const total = price + tax + delevery_carge;
  const grandTotal = price * quantity + total;

  const navigate = useNavigation()

  return (

    
    <View
      style={{
        backgroundColor: 'grey',
        flex: 1,
        padding: 10,
        // flexDirection: 'row',
        
      }}>
      <View
        style={{
          height: 180,
          width: 380,
          backgroundColor: 'white',
          padding: 10,
          borderRadius:20
        }}>
        <Text>price: {price}</Text>
        <Text>quantity: {quantity}</Text>
        <Text>
          Tax: {price} X {quantity} = {tax}
        </Text>
        <Text>Delevery Charge = {price} / 10 = {delevery_carge}</Text>
        <Text>
          Total: {price} + {quantity} + {delevery_carge} = {total}
        </Text>
        <Text>
          Grand Total: {price} * {quantity} + {total} = {grandTotal}
        </Text>
      </View>



      <TouchableOpacity style={{
        padding:10,
        margin:10
      }} onPress={navigate.navigate('payment')}>
        <Button style={{
            backgroundColor:'blue'
        }} icon={'cart'}>Payment</Button>
      </TouchableOpacity>
    </View>
  );
};

export default CartBill;
