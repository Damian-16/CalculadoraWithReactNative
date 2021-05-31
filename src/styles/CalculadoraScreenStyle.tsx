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
        marginBottom:5

    },
    littleResult:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'

    },
    row:{
        flexDirection:"row",
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    button:{
        height:40,
        width:40,
        backgroundColor:'#2D2D2D',
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:10
    },
    buttonText:{
    textAlign:'center',
    padding:5,
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    },


})