import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/CalculadoraScreenStyle';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
             <Text style={styles.littleResult}>1.500</Text>
            <Text style={styles.result}>1.500</Text>

            <View style={styles.button}>
                {/*Boton */}
                <Text style={styles.buttonText}>1</Text>
            </View>
        </View>
    )
}
