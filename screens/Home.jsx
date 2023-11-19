import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import SearchModal from '../component/SearchModal'
import { Avatar, Button } from 'react-native-paper'
import ProductCard from '../component/ProductCard'


const categories = [
    {category:"Shoes", _id:"1"},
    {category:"phone", _id:"2"},
    {category:"camera", _id:"3"},
    {category:"charger", _id:"4"},
    {category:"slipper", _id:"5"},
    {category:"computer", _id:"6"},
    {category:"HeadPhone", _id:"7"}
]

export const products = [
    {
        name:'shoes',
        price:1200,
        stock:12,
        image:"https://clanshoes.com/cdn/shop/files/3_1080.webp?v=1700124556&width=600",
        description:'hello world'
    }
]


const Home = () => {
    const [activeSearch, setActiveSearch] = useState(false)
    const [category, setCategory] = useState()
    const categoryHandler  = (id) => {
        setCategory(id)

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
        flex:1,
        backgroundColor:'green'
    }}>
        <Header />


        {/* search  */}
        <View style={{
            flex:1,
            top:-190,
            left:350
        }}>
        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon icon={'magnify'} />
        </TouchableOpacity>
        </View>


        {/* categories  */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
            top:-300
           
        }}>
        {
            categories.map((item, index) => (
                <Button
                key={item._id}
                onPress={() => categoryHandler(item._id)}
                style={{
                    backgroundColor: category === item._id ? 'blue' : 'green',
                    height:40
                }}
                ><Text style={{color:'white'}}>{item.category}</Text></Button>
            ))
        }
        </ScrollView>


        {/* products  */}
        <View style={{
            
        }}>

            {
                products.map((item, index) => (
                    <ProductCard 
                    key={item._id}
                    index={item.index}
                    price={item.price}
                    stock={item.stock}
                    image={item.image}
                    description={item.description}
                    name={item.name}
                    />
                ))
                
            }
        </View>

        



       






    </View>
    <Footer />
    </>
  )
}

export default Home