import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderItem from '../component/OrderItem'

const Order = () => {

  const orders = [
    {
      _id:"dfeina",
      shippingInfo:{
        address:"donre",
        city:"di;aierea",
        country:"doinre",
        pinCode:32432
      },
      createdAt:'12-10-2000',
      orderStatus:'Process',
      paymentMethod:'online',
      totalAmount:1200
    }
  ]
  return (
    <View style={{
      flex:1,
      backgroundColor:'green'
    }}>
      <ScrollView>
        {
          orders.map((item, index) => (
            <OrderItem
            key={item._id}
            id={item._id}
            index={index}
            address={`${item.shippingInfo.address},${item.shippingInfo.city},${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
            
            
            />
          ))
        }


      </ScrollView>



     
    </View>
  )
}

export default Order