import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../styles/CalculadoraScreenStyle';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
             <Text style={styles.littleResult}>1.500</Text>
            <Text style={styles.result}>1.500</Text>
            <View style={styles.row}>
                <BotonCalc texto="C" color="#9B9B9B"/>
                <BotonCalc texto="+/-" color="#9B9B9B"/>
                <BotonCalc texto="del" color="#9B9B9B"/>
                <BotonCalc texto="/" color="#FF9427"/>
            </View>
        </View>
    )
}
