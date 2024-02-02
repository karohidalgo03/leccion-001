import React from 'react'
import { StyleSheet, View } from "react-native"
export const Caja4 = () => {
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
        //width:600,
        //height:600,
        backgroundColor:'#AAE5E8',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
        
    },
    boxPurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        //position:'absolute',
        //bottom:80,
        //right:0,
        //position:'relative',
        //top:70,
        //left:60,
    },  
    boxOrange:{
        width:100,
        height:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        //position:'absolute',
        //right:0,
        //top:50,
    },
    boxGreen:{
        width:100,
        height:100,
        backgroundColor:'#58DEE3',
        borderWidth:10,
        borderColor:'white',
        //left:-10,
        
     
        
    },  
})
