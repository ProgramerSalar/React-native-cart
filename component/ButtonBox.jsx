import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({
    icon,
    text,
    handler
}) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => handler(text)}>
            <Avatar.Icon icon={icon}   />
        </TouchableOpacity>
        <Text style={{
            color:'white'
        }}>{text}</Text>
      </View>
    </View>
  )
}

export default ButtonBox