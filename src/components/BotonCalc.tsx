import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import { styles } from '../styles/CalculadoraScreenStyle';

interface Props {
    texto:string;
    color?:string;
    ancho?:boolean;
}

export const BotonCalc = ({texto,color ='#2D2D2D',ancho=false}:Props) => {
    return (
           //recbe texto,y el color de el boton que si no viene por defeto sera 2D      
   <TouchableOpacity>
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
