import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const AlertasDerivadasScreen = () => {
  return (
    <View style={style.container}>
      <FondoComponent/>
      <Image source={require('../assets/img/alerta/computadora-soporte.png')}/>
    </View>

  )
}

export default AlertasDerivadasScreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})