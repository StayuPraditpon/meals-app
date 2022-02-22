import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const DefaultText = (props) => {
    return (
        <View >
            <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
        </View>
    )
}



export default DefaultText

const styles = StyleSheet.create({
  text: {
      fontSize: 20,
      fontFamily: "open-sans",
  }
})
