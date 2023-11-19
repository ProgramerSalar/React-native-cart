import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'



export const CartItems = [
    {
        name:'shoes',
        price:1200,
        stock:12,
        image:"https://clanshoes.com/cdn/shop/files/3_1080.webp?v=1700124556&width=600",
        description:'hello world',
        quantity:3
    }
]


const Cart = () => {
    const navigate = useNavigation()

    const incrementHandler = () => {
        
        
    }
    const decrementHandler = () => {}

    const submitHandler = () => {
        navigate.navigate('confirmOrder')
    }

  return (
    <View style={{
        flex:1,
        backgroundColor:'green'
    }}>
        {
            CartItems.map((item, index) => (
                <View>
                    <Image 
                    source={{ uri: item.image}}
                    style={{
                        height:80,
                        width:80
                    }}
                    />
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>

                    <View>
                        <TouchableOpacity onPress={incrementHandler}>
                            <Avatar.Icon icon={'plus'} />
                        </TouchableOpacity>
                        <Text>{item.quantity}</Text>
                        <TouchableOpacity onPress={decrementHandler}>
                            <Avatar.Icon icon={'minus'} />
                        </TouchableOpacity>

                    </View>

                    

                </View>


            ))
        }

        <View>
            <TouchableOpacity onPress={submitHandler}>
                
                <Button style={{
                    backgroundColor:'blue'
                }}>Conform Order</Button>
            </TouchableOpacity>
        </View>
    
    </View>
  )
}

export default Cart