import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import Footer from '../components/Footer'
import { colors } from '../src/styles/styles'
import ProductCard from '../components/ProductCard'
import SearchModal from '../components/SearchModal'


const categories = [
  {category:"shoes", _id:"1"},
  {category:"shirt", _id:"2"},
  {category:"bulb", _id:"3"},
  {category:"computer", _id:"4"},
  {category:"mouse", _id:"5"},
  {category:"spiker", _id:"6"},
  {category:"photo", _id:"7"}
]

export const products = [
  {
    name:"Puma",
    _id:"1",
    price:1200,
    stock:12,
    quantity:10,
    image:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

  },
  {
    name:"Puma",
    _id:"2",
    price:1200,
    stock:12,
    quantity:4,
    image:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

  },
  {
    name:"Puma",
    _id:"3",
    price:1200,
    stock:12,
    quantity:4,
    image:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

  },
  {
    name:"Puma",
    _id:"4",
    price:1200,
    stock:12,
    quantity:4,
    image:"https://www.shutterstock.com/image-photo/varna-bulgaria-octomber-12-2019-260nw-1566594391.jpg",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

  },
]

const Home = () => {
  const [category, setCategory] = useState("")
  const [activeSearch, setActiveSearch] = useState(false)
  const categoryhandler = (id, category) => {
    setCategory(id, category)
    // console.log(id, category)
    
  }

  
  return (
    <>
    {
      activeSearch && (
        <SearchModal 
        activeSearch={activeSearch}
        setActiveSearch={setActiveSearch}
        />
      )
    }
     <View style={{
      flex:1
    }}>
      
      {/* <Header back={true} /> */}
      <View style={{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin:5
      }}>
        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
          <Avatar.Icon icon={'magnify'}  />
        </TouchableOpacity>
      </View>

      {/* categories  */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          categories.map((item, index) => (
            <Button
            onPress={() => categoryhandler(item._id, item.category)}
            style={{
              backgroundColor: category === item._id ? "blue" : colors.color4,
              height:40

            }}
            >
              {item.category}
            </Button>
          ))
        }

      </ScrollView>


      {/* products  */}
      <ScrollView style={{
        padding:20,
        
      }} showsVerticalScrollIndicator={false} >
      <ScrollView horizontal style={{
        padding:20
      }} showsHorizontalScrollIndicator={false}>
        {
          products.map((item, index) => (
            <ProductCard 
            key={item._id}
            index={index}
            name={item.name}
            id={item._id}
            price={item.price}
            stock={item.stock}
            image={item.image}

            
            />
          ))
        }
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          products.map((item, index) => (
            <ProductCard 
            key={item._id}
            index={index}
            name={item.name}
            id={item._id}
            price={item.price}
            stock={item.stock}
            image={item.image}

            
            />
          ))
        }
      </ScrollView>
      </ScrollView>
      



     
      
      


      
    </View>
    <Footer />
    </>
   
  )
}

export default Home