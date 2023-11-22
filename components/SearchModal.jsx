import { View, Text,BackHandler } from 'react-native'
import React,{useEffect} from 'react'
import { Searchbar } from 'react-native-paper'

const SearchModal = ({
    setActiveSearch
}) => {

    const ActionHandler = () => {
        setActiveSearch(false)
        return true

    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', ActionHandler)

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', ActionHandler)
        }
    })
  return (
    <View style={{
        height:'100%',
        width:'100%',
        backgroundColor:'green'

    }}>
      
      <Searchbar 
      placeholder='Search.....'
      style={{
        margin:10,
        
      }}
      />



    </View>
  )
}

export default SearchModal