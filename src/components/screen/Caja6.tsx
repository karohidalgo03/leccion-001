import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Caja6 = () => {
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
        backgroundColor:'#AAE5E8',
        //justifyContent:'center',
        flexDirection:'row',
        //alignItems:'center'
        //paddingVertical:50,
        //marginVertical:30,
        flex: 1,
        //marginTop: 8,
        //paddingHorizontal:50,
    },
    boxPurple:{
        width:100,
        
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        //flexDirection:'column',
        left:0,
        //margin:20
       
    },  
    boxOrange:{
        width:100,
        backgroundColor:'orange',
        borderWidth:10,
        borderColor:'white',
        justifyContent:'center',
        left:0,
        marginHorizontal:55
        
    },
    boxGreen:{
        width:100,
        backgroundColor:'#58DEE3',
        borderWidth:10,
        borderColor:'white',   
        right:0,
        //left:0,
        //margin:20
    },  
})
