import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import { styles } from '../styles/CalculadoraScreenStyle';

interface Props {
    texto:string;
    color?:string;
    ancho?:boolean;
    accion: (numeroTexto:string) => void;
}

export const BotonCalc = ({texto,color ='#2D2D2D',ancho=false,accion}:Props) => {
    return (
           //recbe texto,y el color de el boton que si no viene por defeto sera 2D,el ancho es para el numero 0  la accion es la acciond e cda boton      
   <TouchableOpacity 
   onPress={()=>accion(texto)}>
     <View style={{
        ... styles.button,
        backgroundColor:color,
        width:(ancho)? 100:40
         }}>
         {/*Boton */}
         <Text style={{
             ...styles.buttonText,
             color: (color === '#9B9B9B')?'black':'white',
         }}>{texto}</Text>
     </View>
     </TouchableOpacity>  

  
  
    )
}
