import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from './Home'
import CartItem from '../components/CartItem'
import { Button } from 'react-native-paper'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const navigation = useNavigation()

  return (
  <>
    <View style={{
      backgroundColor:'grey',
      flex:1
    }}>
      <ScrollView style={{
        
      }}>
        {
          products.map((item, index) => (
            <CartItem 
            key={item._id}
            name={item.name}
            id={item._id}
            quantity={item.quantity}
            image={item.image}
            price={item.price}
            stock={item.stock}
            

            />
          ))
        }
      </ScrollView>


      <View style={{
        bottom:80,
        margin:10,
        padding:10
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('cartbill')}>
        <Button style={{
          backgroundColor:'blue'
        }} >Process To Bill</Button>
        </TouchableOpacity>
       
      </View>
    </View>
    <Footer />
  </>
  )
}

export default Cart

