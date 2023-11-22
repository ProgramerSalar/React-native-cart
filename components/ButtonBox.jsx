import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const ButtonBox = ({
  text,
  icon,
  handler
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => handler(text)}>
      <Avatar.Icon icon={icon}  />
      <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBox