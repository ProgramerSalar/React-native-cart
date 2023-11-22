import { View, Text } from 'react-native'
import React from 'react'
import ButtonBox from '../components/ButtonBox'
import { useNavigation } from '@react-navigation/native'

const Admin = () => {

    const navigation = useNavigation()

    const navigationHandler = (text) => {
        switch(text){
            case "Category":
                navigation.navigate('category')
                break;

            case "Products":
                navigation.navigate('product')
                break;
            
            case "Order":
                navigation.navigate('order')
                break;

            default:
                navigation.navigate('order')
                break;
                
        }
    }
    
  return (
    <View style={{
        backgroundColor:'pink',
        flex:1,
    
          
    }}>

        <View style={{
            backgroundColor:'green',
            height:150,
            width:380,
            margin:10,
            borderRadius:10,
        }}>

        <View style={{
            justifyContent:'space-between',
            flexDirection:'row',
            padding:10,
            margin:10
          }}>
          <ButtonBox text={'Category'} icon={'plus'} handler={navigationHandler} />
          <ButtonBox text={'Order'} icon={'stack-exchange'} handler={navigationHandler} />
          <ButtonBox text={'Products'} icon={'plus'} handler={navigationHandler} />
          

          </View>

          
        </View>



      
    </View>
  )
}

export default Admin