import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import ButtonBox from '../components/ButtonBox'
import { useNavigation } from '@react-navigation/native'
import { products } from './Home'
import ProductItem from '../components/ProductItem'

const Profile = () => {

  const email = "manishkumar@gmail.com"
  const name = "manish kumar"
  const navigate = useNavigation()
  const navigationHandler = (text) => {
    

    switch(text){
      case "Update Profile":
        navigate.navigate('updateProfile')
        break;

      case "Password":
        navigate.navigate("newPassword")
        break;

      case "Orders":
        navigate.navigate('order')
        break;


      case "Admin":
        navigate.navigate("admin")
        break;


      case "Sign Out":
        navigate.navigate("signout")
        break;

      default:
        navigate.navigate('order')
        break;




    }





  }

  return (
    <View style={{
      backgroundColor:'grey',
      flex:1
    }}>

      <View style={{
        backgroundColor:'white',
        height:150,
        width:350,
        padding:10,
        margin:30,
        borderRadius:10
        
      }}>
        <Avatar.Image  />
        <Text style={{
          color:'green',
          
        }}>UserName: {name}</Text>
        <Text style={{
          color:'green'
        }}>Email: {email}</Text>
      </View>



      <View>

        <View style={{
          backgroundColor:'green',
          height:240,
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
          <ButtonBox text={'Update Profile'} icon={'lead-pencil'} handler={navigationHandler} />
          <ButtonBox text={'Password'} icon={'key-change'} handler={navigationHandler} />
          <ButtonBox text={'Orders'} icon={'border-all'} handler={navigationHandler} />
          

          </View>
          <View style={{

            justifyContent:'space-between',
            flexDirection:'row',
            padding:10,
            margin:10
          }}>
            <ButtonBox text={'Admin'} icon={'format-align-left'} handler={navigationHandler} />
          <ButtonBox text={'Sign Out'} icon={'exit-to-app'} handler={navigationHandler} />
          

          </View>
          

        </View>



      </View>


      <View>
        <ScrollView>
          {
            products.map((item, index) => (
              <ProductItem  
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              />
            ))
          }
        </ScrollView>

      </View>
      
    </View>
  )
}

export default Profile