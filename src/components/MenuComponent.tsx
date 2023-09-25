import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, Button } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthContext from '../context/AuthContext';

interface Datos{
    img:any,
    titulo:string,
    subTitle:string,
    fondo:any
}


const MenuComponent = (props: DrawerContentComponentProps) => {

    const { user, token, logOut, rol } = useContext(AuthContext);

    const datos:Datos={
        img:require('../assets/img/mi-perfil.png'),
        fondo:require('../assets/img/fondo-4.jpg'),
        subTitle:'hola',
        titulo: rol==='USER_ADMIN'?'Administrador':(rol==='USER_SUPERVISOR')?'Supervisor':'Informatico'
    }


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#004F79' }}>
                <ImageBackground source={require('../assets/img/fondo-4.jpg')} style={{ padding: 10, alignItems: 'center' }}>
                    <Image source={datos.img}
                        style={{ width: 100, height: 100, marginBottom: 5 }} />
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium' }}>{datos.titulo}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontFamily: 'Roboto-Medium', marginRight: 5 }}>
                            {datos.subTitle}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#004F79' }}>
                <TouchableOpacity onPress={logOut} style={{ paddingVertical: 5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-sharp" size={22} color='#333'/>
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 5, color:'#333'}} >Cerrar Sesion</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default MenuComponent;


const style = StyleSheet.create({

});