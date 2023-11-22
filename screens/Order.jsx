import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import OrderItem from '../components/OrderItem'

const Orders = [
    {
        _id:'idnidaer',
        shippingInfo:{
            address:'sanjay colony',
            distic:'fridabad',
            state:'haryana',
            country:'india'
        },
        created_date:'12-01-3000',
        orderStatus:'complete',
        paymentMethod:'COD',
        TotalAmount:1200
    },
    {
        _id:'idnidaefdrer',
        shippingInfo:{
            address:'sanjay colony',
            distic:'fridabad',
            state:'haryana',
            country:'india'
        },
        created_date:'12-01-3000',
        orderStatus:'complete',
        paymentMethod:'COD',
        TotalAmount:1200
    },

]


const Order = () => {
  return (
    <View style={{
        backgroundColor:'green',
        flex:1
    }}>

      <ScrollView>
        {
            Orders.map((item, index) => (
                <OrderItem
                key={item._id}
                id={item._id}
                address={item.shippingInfo.address}
                distic={item.shippingInfo.distic}
                state={item.shippingInfo.state}
                country={item.shippingInfo.country}
                created_date={item.created_date}
                orderStatus={item.orderStatus}
                paymentMethod={item.paymentMethod}
                TotalAmount={item.TotalAmount}

                />
            ))
        }
      </ScrollView>

    
    </View>
  )
}

export default Order