import { View, Text, Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Avatar, Button } from 'react-native-paper'

const CartItem = ({
    name,
    id,
    // quantity,
    image,
    price,
    stock
}) => {
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


  return (
    <View style={{
        flexDirection:'row',
        
        
    }}>
        <View style={{
          
        }}>
        <Image source={{
            uri:image
        }} style={{
            height:80,
            width:80,
            padding:10,
            margin:20,
            borderRadius:10
        }} />

        </View>

<View style={{
    justifyContent:'center',
    backgroundColor:'white',
    width:60,
    borderRadius:10,
    padding:10,
    margin:10,
    // flexDirection:'row'

}}>
<Text style={{
            justifyContent:'center',
            
            
        }}>{name}</Text>
        <Text style={{
            justifyContent:'center',
            
        }}>${price}</Text>

        
</View>

<View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignContent:'center',
            alignItems:'center'
        }}>
            <TouchableOpacity onPress={incrementHandler}>
                <Avatar.Icon icon={'plus'}  size={40}/>
            </TouchableOpacity>
            <Text style={{
                margin:20
            }}>{quantity}</Text>
            <TouchableOpacity onPress={decrementHandler}>
                <Avatar.Icon icon={'minus'} size={40}/>
            </TouchableOpacity>
        </View>
        
      
        
        
      
    </View>
  )
}

export default CartItem