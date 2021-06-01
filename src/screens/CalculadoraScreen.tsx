import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../styles/CalculadoraScreenStyle';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {
    const { numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDelete,
        armarNumero,
        calcular,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,} = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            { (numeroAnterior !=='0')&&( // este op. ternario sirve para validar si aparece el resultado pequeño o no 
             <Text style={styles.littleResult}>{numeroAnterior}</Text>)
            }
            <Text
             style={styles.result}
             numberOfLines={1}
             adjustsFontSizeToFit>{numero}</Text>
            {/* fila de botones */}
            <View style={styles.row}>
                <BotonCalc texto="C"  accion={limpiar} color="#9B9B9B"/>
                <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo}/>
                <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete}/>
                <BotonCalc texto="/" color="#FF9427" accion={btnDividir}/>
            </View>

             {/* fila de botones2 */}
             <View style={styles.row}>
                <BotonCalc texto="7"  accion={armarNumero}/>
                <BotonCalc texto="8"  accion={armarNumero}/>
                <BotonCalc texto="9"  accion={armarNumero}/>
                <BotonCalc texto="X" color="#FF9427" accion={btnMultiplicar}/>
            </View>
             {/* fila de botones3 */}
             <View style={styles.row}>
                <BotonCalc texto="4"  accion={armarNumero}/>
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6"  accion={armarNumero}/>
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar}/>
            </View>
             {/* fila de botones4 */}
             <View style={styles.row}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2"  accion={armarNumero}/>
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar}/>
            </View>
             {/* fila de botones5 */}
             <View style={styles.row}>
                <BotonCalc texto="0" ancho  accion={armarNumero}/>
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={calcular}/>
            </View>
        </View>
    )
}
