import React from 'react'
import { View, Text } from 'react-native';
import { styles } from '../styles/CalculadoraScreenStyle';

interface Props {
    texto:string;
    color?:string;
}

export const BotonCalc = ({texto,color ='#2D2D2D'}:Props) => {
    return (
           //recbe texto,y el color de el boton que si no viene por defeto sera 2D      
     
     <View style={{
        ... styles.button,
        backgroundColor:color
         }}>
         {/*Boton */}
         <Text style={styles.buttonText}>{texto}</Text>
     </View>

  
  
    )
}
