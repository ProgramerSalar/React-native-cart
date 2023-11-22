import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer'


  const name="Puma"
  const  _id="1"
  const  price=1200
  const stock=12
  const  image="https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg"
  const description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
  



const Productdetails = () => {

  const navigation = useNavigation()
  const [quantity, setQuantity] = useState(0)
  const incrementHandler = () => {
    // console.log('increment')
    if(stock <= quantity) return
    setQuantity((prev) => prev + 1)
  }
  const  decrementHandler = () => {
    // console.log('decrement')
    if(quantity <= 0) return;
    setQuantity((prev) => prev - 1)
  }
  const Handler = () => {
    // console.log(quantity)
  }

  return (
    <>
    <View style={{
      flex:1,
      backgroundColor:'#00ffff'
    }}>

      <Image 
      source={{ uri: image}}
      style={{
        width:420,
        height:360
      }}
      />
      
      <View style={{
        height:150,
        width:412,
        backgroundColor:'green',
        // borderBottomLeftRadius:100,
        borderBottomRightRadius:100
      }}>
      <Text style={{
        color:'white',
        fontWeight:'bold'
      }} >Name: {name}</Text>
      <Text style={{
        color:"white",
        fontWeight:'bold'
      }}>Price: ${price}</Text>
      <Text style={{
        color:"white",
        fontWeight:'bold'
      }}>{description}</Text>

      </View>

      <View style={{
        flexDirection:'row',
        top:10,
        bottom:10
      }}>
        <TouchableOpacity onPress={incrementHandler}>
          <Avatar.Icon icon={'plus'} />
        </TouchableOpacity>
        
        <View style={{
          width:50,
          justifyContent:'center',
          flexDirection:'row',
          margin:20,
          backgroundColor:'green',
          height:25,
          borderRadius:20
        }}>
          
        <Text>{quantity}</Text>

        </View>
        <TouchableOpacity onPress={decrementHandler}>
          <Avatar.Icon icon={'minus'} />
        </TouchableOpacity>
      </View>

      <View style={{
        padding:10,
        margin:10,
        top:40
      }}>
<TouchableOpacity>
  <Button style={{
    backgroundColor:'blue'
  }} onPress={Handler}>Add To Cart</Button>
</TouchableOpacity>

      </View>
    </View>
    <Footer />
    </>
  )
}

export default Productdetails