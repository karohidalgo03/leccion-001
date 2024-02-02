
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Caja2 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.boxPurple}></View>
    <View style={styles.boxOrange}></View>
    <View style={styles.rowGreen}></View>
</View>
  )
}



const styles = StyleSheet.create({
    container: {
      paddingVertical:200,
      marginVertical:30,
      flex: 1,
      marginTop: 8,
      backgroundColor: '#AAE5E8',
      //minHeight: 200,
    },
    boxPurple: {
      width: 100,
      height: 100,
      backgroundColor:'purple',
      borderWidth:10,
      borderColor:'white',
    },
    boxOrange: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderWidth:10,
      borderColor:'white',
      backgroundColor:'orange',
      height:100,
      width:100,
    },
    rowGreen: {
        
        height: 100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'#58DEE3',
      },
      
})