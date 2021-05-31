import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    theme:{
        flex:1,
        backgroundColor:'black',
       
    },
    calculadoraContainer:{
        paddingHorizontal:20,
        flex:1,
        justifyContent:"flex-end",
    },

   result:{
        color:"white",
        fontSize:60,
        textAlign:'right',

    },
    littleResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'

    },
    button:{
        height:40,
        width:40,
        backgroundColor:'#333333',
        borderRadius:100,
        justifyContent:"center",
    },
    buttonText:{
    textAlign:'center',
    padding:5,
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    },


})