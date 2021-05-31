import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../styles/CalculadoraScreenStyle';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
             <Text style={styles.littleResult}>1.500</Text>
            <Text style={styles.result}>1.500</Text>
            {/* fila de botones */}
            <View style={styles.row}>
                <BotonCalc texto="C" color="#9B9B9B"/>
                <BotonCalc texto="+/-" color="#9B9B9B"/>
                <BotonCalc texto="del" color="#9B9B9B"/>
                <BotonCalc texto="/" color="#FF9427"/>
            </View>

             {/* fila de botones2 */}
             <View style={styles.row}>
                <BotonCalc texto="7" />
                <BotonCalc texto="8" />
                <BotonCalc texto="9" />
                <BotonCalc texto="X" color="#FF9427"/>
            </View>
             {/* fila de botones3 */}
             <View style={styles.row}>
                <BotonCalc texto="4" />
                <BotonCalc texto="5" />
                <BotonCalc texto="6" />
                <BotonCalc texto="-" color="#FF9427"/>
            </View>
             {/* fila de botones4 */}
             <View style={styles.row}>
                <BotonCalc texto="1" />
                <BotonCalc texto="2" />
                <BotonCalc texto="3" />
                <BotonCalc texto="+" color="#FF9427"/>
            </View>
             {/* fila de botones5 */}
             <View style={styles.row}>
                <BotonCalc texto="0" ancho/>
                <BotonCalc texto="." />
                <BotonCalc texto="=" color="#FF9427"/>
            </View>
        </View>
    )
}
