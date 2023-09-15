import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import LogoComponent from '../components/LogoComponent';

const {width, height} = Dimensions.get('window');


const LoginScreen = () => {
  return (
    <View style={style.container}>
        <FondoComponent/>
        <LogoComponent
        titulo='INFORMATICA SOS'
        subtitulo = 'Iniciar Sesión'/>
        <View style={style.containerGeneral}>
            <View style={style.containerInput}>
                <TextInput
                    placeholder='Ingrese DNI'
                    style={style.textInput}
                    placeholderTextColor={'#969FAA'}
                    maxLength={8}
                    keyboardType='numeric'/>
            </View>
            <View style={style.containerInput}>
                <TextInput
                    placeholder='Ingrese contraseña'
                    style={style.textInput}
                    placeholderTextColor={'#969FAA'}
                    maxLength={8}
                    keyboardType='numeric'/>
            </View>
            <TouchableOpacity style={style.btnLogin}>
                <Text style={style.textBtn}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.LinkdniBtn}>
                <Text style={style.textBtn}>INICIAR SESION</Text>
                <Text style={style.textCuenta}>No tienes una cuenta? </Text>
                <Text style={style.textLink}>Registrate ahora</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


export default LoginScreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerGeneral:{
        width,
        alignItems: 'center'
    },

    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderRadius: 10,
        borderColor: '#004F79',
        borderWidth: 1.5,
        backgroundColor: '#fff',
        height: 55,
        marginBottom: 15
    },

    textInput:{
        color: '#969FAA',
        width: '75%',
        left: 60
    },

    iconText:{
        position: 'absolute',
        left: 5
    },

    btnLogin:{
        backgroundColor: '#004F79',
        width: '85%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },

    textBtn:{
        color: '#fff',
        fontWeight: 'bold'
    },

    LinkdniBtn:{
        flexDirection: 'row'
    },

    textCuenta:{
        color: '#89919C',
        fontWeight: 'bold'
    },

    textLink:{
        color: '#004F79',
        fontWeight: 'bold'
    }

});