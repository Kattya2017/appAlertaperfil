import React,{useContext} from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View,Keyboard } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import LogoComponent from '../components/LogoComponent';
import AuthContext from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');


const LoginScreen = () => {
    const {usuario,password,form,onChange} = useForm({
        usuario:'',
        password:''
    })
    const {singIn} = useContext(AuthContext);
    const login = ()=>{
        console.log(usuario, password);
        Keyboard.dismiss();
        singIn({usuario, password});
    };
  return (
    <View style={style.container}>
        <FondoComponent/>
        <LogoComponent
        titulo='INFORMATICA SOS'
        subtitulo = 'Iniciar Sesión'/>
        <View style={style.containerGeneral}>
            <View style={style.containerInput}>
                <TextInput
                    placeholder='Ingrese usuario'
                    style={style.textInput}
                    placeholderTextColor={'#969FAA'}
                    keyboardType='default'
                    autoCapitalize='none'
                    onChangeText={(value)=>onChange(value,'usuario')}
                    value={usuario}
                    />
                    <Icon
                    name='person-sharp'
                    color={'#840102'}
                    size={35}
                    style={style.iconText}
                    />
            </View>
            <View style={style.containerInput}>
                <TextInput
                    placeholder='Ingrese contraseña'
                    style={style.textInput}
                    placeholderTextColor={'#969FAA'}
                    keyboardType='default'
                    onChangeText={(value)=>onChange(value,'password')}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    />
                    <Icon
                    name='lock-closed-sharp'
                    color={'#840102'}
                    size={35}
                    style={style.iconText}
                    />
            </View>
            <TouchableOpacity style={style.btnLogin}
                onPress={login}
            >
                <Text style={style.textBtn}>INICIAR SESION</Text>
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
        borderColor: '#840102',
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
        backgroundColor: '#840102',
        width: '85%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },

    textBtn:{
        color: '#fff',
        fontFamily: 'Montserrat-VariabkeFont_wght',
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
        color: '#840102',
        fontWeight: 'bold'
    },

});