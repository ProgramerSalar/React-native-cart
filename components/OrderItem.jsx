import {View, Text} from 'react-native';
import React from 'react';

const OrderItem = ({
  id,
  address,
  distic,
  state,
  country,
  created_date,
  paymentMethod,
  TotalAmount,
}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          width: 220,
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            padding: 10,
            margin: 10,
            borderRadius: 10,
            width: 250,
          }}>
          <Text>ID: {id}</Text>
          <Text>Address: {address}</Text>
          <Text>State: {state}</Text>
          <Text>Country: {country}</Text>
        </View>

        <View
          style={{
            backgroundColor: 'grey',
            padding: 10,
            margin: 10,
            borderRadius: 10,
            width: 250,
          }}>
          <Text>Created Date: {created_date}</Text>
          <Text>Payment Method: {paymentMethod}</Text>
          <Text>Total Amount: {TotalAmount}</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;
