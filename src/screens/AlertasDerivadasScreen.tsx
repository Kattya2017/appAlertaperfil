import React from 'react'
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import Dropdown from 'react-native-input-select';

const {width, height} = Dimensions.get('window');

const AlertasDerivadasScreen = () => {
  return (
    <View style={style.container}>
      <FondoComponent/>
      <View style={style.subContainer}>
        <Text style={style.textPrincipal}>SOPORTE TECNICO IMPRESORA</Text>
        <View style={{width:'85%', marginTop:70}}>
         
          <Text style={style.textDescripcion}>Sede: Sede Administrativa</Text>
          <Text style={style.textDescripcion}>Organo: Gerencia de Administración Distrital</Text>
          <Text style={style.textDescripcion}>Unidad Organica: Unidad de Administración y Finanzas</Text>
          <Text style={style.textDescripcion}>Area: Coordinación de Contabilidad</Text>
          <Text style={style.textDescripcion}>Fecha:</Text>
          <Text style={style.textDescripcion}>Hora:</Text>
        
        </View>
       
        <View style={{justifyContent:'center', alignItems:'center'}}>

         {/*} <Dropdown
            label="Personal"
            placeholder="Seleccionar al personal informatico"
            checkboxLabelStyle={{color:'black'}}
            primaryColor={'red'}
            dropdownStyle={{backgroundColor:'white'}}
        />*/}

        <TouchableOpacity style={style.btnDerivar}>
          <Text style={style.BtnTexto}>DERIVAR</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AlertasDerivadasScreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    subContainer:{
      position: 'absolute',
      width: '90%',
      height: '60%',
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: '#840102',
      borderWidth:2,
      top:80
    },
    
    textPrincipal:{
      fontFamily:'Roboto-Bold',
      fontSize: 15,
      bottom:10,
      color:'#840102',
      marginTop:30,
      textAlign: 'center'
    },

    textDescripcion:{
      fontFamily: 'Roboto-Bold',
      color: 'black',
      fontSize: 12,
      justifyContent:'center',
      alignItems:'center',
      bottom:60,
      left:15
    },

    btnDerivar:{
      backgroundColor:'#840102',
      width:'90%',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      marginTop:'35%'
    },

    BtnTexto:{
      color:'white',
      fontWeight:'bold',
      fontSize:17,
    }

    


})