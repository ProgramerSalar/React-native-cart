import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { Image } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Header from '../component/Header'
import Toast from 'react-native-toast-message'


    const name='shoes'
    const price=1200
    const stock=12
    const image="https://clanshoes.com/cdn/shop/files/3_1080.webp?v=1700124556&width=600"
    const description='hello world'





const Productdetails = () => {

    
    const [quantity, setQuantity] = useState(0)

    const incrementHandler = () => {
        if(stock <= quantity) return;
        setQuantity((prev) => prev + 1)
    }


    const decrementHandler = () => {
        if(quantity <= 1) return;
        setQuantity((prev) => prev - 1)
    }

    const submitHandler = () => {
        if(stock === 0) Toast.show({
            type:'error',
            text1:'Out of Stock'
        })
        Toast.show({
            type:'success',
            text1:`Add To Cart ${quantity}`
        })

        
    }
  return (
    <View>

        
      <View>
        <Image source={{ uri: image }}  style={{
        height:380,
        width:'100%'
        }}/>


        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{stock}</Text>
        <Text>{description}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={incrementHandler}>
            <Avatar.Icon icon={'plus'}/>
        </TouchableOpacity>

        <Text>{quantity}</Text>

        <TouchableOpacity onPress={decrementHandler}>
            <Avatar.Icon icon={'minus'}/>
        </TouchableOpacity>
      </View>

      <Button style={{
        backgroundColor:'blue',
        margin:10
      }}
      onPress={submitHandler}
      >Add To Cart</Button>
    </View>
  )
}

export default Productdetails