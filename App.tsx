
 import React from 'react';
 import {SafeAreaView, StatusBar,} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/styles/CalculadoraScreenStyle';


 const App = () => {
  
   return (
     <SafeAreaView style={styles.theme}>
       <StatusBar backgroundColor='black'/>
       <CalculadoraScreen/>
     </SafeAreaView>
     )
     
 }

 export default App;
