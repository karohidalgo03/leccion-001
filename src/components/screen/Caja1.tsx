
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Caja1 = () => {
  return (
    <View style={styles.container}>
    <View style={styles.boxPurple}></View>
    <View style={styles.boxOrange}></View>
    <View style={styles.boxGreen}></View>
</View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#AAE5E8',
    },
    boxPurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:40,
        right:0,
    },  
    boxOrange:{
        width:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0,
        top:100,
        height:'70%', 
    },
    boxGreen:{
        width:100,
        height:100,
        backgroundColor:'#58DEE3',
        borderWidth:10,
        borderColor:'white',
        right:0,
        position:'absolute',
        
     
    },  
})