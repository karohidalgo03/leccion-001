import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Caja7 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.box}></View>
    <View style={styles.box1}></View>
    <View style={styles.row}></View>
</View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#AAE5E8',
      paddingVertical:40,
      
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor:'purple',
      borderWidth:10,
      borderColor:'white',
      position:'absolute',
      right:112,
      
    },
    row: {
      width: 100,
      height: 100,
      backgroundColor:'orange',
      borderWidth:10,
      borderColor:'white',
      position:'absolute',
      
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor:'#58DEE3',
        borderWidth:10,
        borderColor:'white', 
        right:-100,
        
        
      },
      
  });