import { View, Text, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { Searchbar } from 'react-native-paper'

const SearchModal = ({
    setActiveSearch
}) => {

    const backAction = () => {
        setActiveSearch(false)
        return true
    }
    useEffect(() => {

        BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction)
        }


    })

  return (
    <View style={{
        height:'100%',
        width:'100%',
        zIndex:100,
        position:'absolute',
        backgroundColor:'grey'
    }}>
        <Searchbar placeholder='Search....' style={{
        margin:10
        }}/>
   
    </View>
  )
}

export default SearchModal