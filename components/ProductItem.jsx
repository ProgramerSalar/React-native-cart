import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import ModalItem from './ModalItem'

const ProductItem = ({
    key,
    id,
    name,
    price,
    image
}) => {

    const [Mymodal, setMyModal] = useState(false)

    
  return (
    <>
    {
        Mymodal && (
            <ModalItem 
            setMyModal={setMyModal}
            Mymodal={Mymodal}
            />
        )
    }
     <View>
        <TouchableOpacity onPress={() => setMyModal((prev) => !prev) }>
        <View style={{
            backgroundColor:'pink',
            padding:10,
            margin:10,
            borderRadius:10,
            flexDirection:'row',
            


        }}>
            <Image  source={{ uri: image }} style={{
            height:40,
            width:80
            }}/>
            <View style={{
                justifyContent:'center',
                padding:10,
                borderRadius:10,
                flexDirection:'row',
                
                
            }}>
            <Text style={{
                right:-10
            }}>Name:  {name}</Text>
            <Text style={{
                right:-100
            }}>Price: ${price}</Text>

            </View>
        

        </View>
        </TouchableOpacity>
        
      
    </View>
    </>
   
  )
}

export default ProductItem