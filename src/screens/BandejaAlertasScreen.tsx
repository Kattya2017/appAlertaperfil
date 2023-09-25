import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FondoComponent from '../components/FondoComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const BandejaAlertasScreen = () => {
    return (
        <View style={style.container}>
            <FondoComponent />
            <ScrollView style={style.ContainerScroll}>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:10
                    }}
                >
                    <View style={style.containerCuadro}>
                        <View style={style.imgAlertas}>
                            <Image source={require('../assets/img/alerta/audio-video.png')}
                                style={{ width: '70%', height: 80 }} 
                            />
                        </View>
                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={style.textCuadro}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={style.textAdministrado}>Kattya Jackelin Grados Gonzales</Text>
                            <Text style={style.textInformacion}>- Sede de Administracion</Text>
                            <Text style={style.textInformacion}>- Gerencia de Administración Distrital</Text>
                            <Text style={style.textInformacion}>- Fecha: 18-09-2023</Text>
                            <Text style={style.textInformacion}>- Hora: 09:00 a.m</Text>

                            <View style={style.boton}>
                                <TouchableOpacity style={style.clickAgregar}>
                                    <Icon
                                        name='add-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.clickAspa}>
                                    <Icon
                                        name='checkmark-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:10
                    }}
                >
                    <View style={style.containerCuadro}>
                        <View style={style.imgAlertas}>
                            <Image source={require('../assets/img/alerta/audio-video.png')}
                                style={{ width: '70%', height: 80 }} 
                            />
                        </View>
                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={style.textCuadro}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={style.textAdministrado}>Kattya Jackelin Grados Gonzales</Text>
                            <Text style={style.textInformacion}>- Sede de Administracion</Text>
                            <Text style={style.textInformacion}>- Gerencia de Administración Distrital</Text>
                            <Text style={style.textInformacion}>- Fecha: 18-09-2023</Text>
                            <Text style={style.textInformacion}>- Hora: 09:00 a.m</Text>

                            <View style={style.boton}>
                                <TouchableOpacity style={style.clickAgregar}>
                                    <Icon
                                        name='add-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.clickAspa}>
                                    <Icon
                                        name='checkmark-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:10
                    }}
                >
                    <View style={style.containerCuadro}>
                        <View style={style.imgAlertas}>
                            <Image source={require('../assets/img/alerta/audio-video.png')}
                                style={{ width: '70%', height: 80 }} 
                            />
                        </View>
                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={style.textCuadro}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={style.textAdministrado}>Kattya Jackelin Grados Gonzales</Text>
                            <Text style={style.textInformacion}>- Sede de Administracion</Text>
                            <Text style={style.textInformacion}>- Gerencia de Administración Distrital</Text>
                            <Text style={style.textInformacion}>- Fecha: 18-09-2023</Text>
                            <Text style={style.textInformacion}>- Hora: 09:00 a.m</Text>

                            <View style={style.boton}>
                                <TouchableOpacity style={style.clickAgregar}>
                                    <Icon
                                        name='add-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.clickAspa}>
                                    <Icon
                                        name='checkmark-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:10
                    }}
                >
                    <View style={style.containerCuadro}>
                        <View style={style.imgAlertas}>
                            <Image source={require('../assets/img/alerta/audio-video.png')}
                                style={{ width: '70%', height: 80 }} 
                            />
                        </View>
                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={style.textCuadro}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={style.textAdministrado}>Kattya Jackelin Grados Gonzales</Text>
                            <Text style={style.textInformacion}>- Sede de Administracion</Text>
                            <Text style={style.textInformacion}>- Gerencia de Administración Distrital</Text>
                            <Text style={style.textInformacion}>- Fecha: 18-09-2023</Text>
                            <Text style={style.textInformacion}>- Hora: 09:00 a.m</Text>

                            <View style={style.boton}>
                                <TouchableOpacity style={style.clickAgregar}>
                                    <Icon
                                        name='add-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.clickAspa}>
                                    <Icon
                                        name='checkmark-outline'
                                        size={45}
                                        color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default BandejaAlertasScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ContainerScroll: {
        flex: 1,
        width,
        height,
        marginTop: 20,
    },

    containerCuadro: {
        width: '95%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#840102',
        borderWidth: 1.5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        flexDirection: 'row'
    },

    imgAlertas: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },

    textCuadro: {
        color: '#840102',
        width: '100%',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 16
    },

    textAdministrado: {
        color: '#004F79',
        width: '100%',
        marginTop: 5,
        fontSize: 14,
        fontWeight: '900'
    },

    textInformacion: {
        color: '#343F4B',
        width: '100%',
        fontSize: 12
    },

    boton: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-evenly',
        right: 15,
        bottom: 30
    },

    clickAgregar: {
        backgroundColor: '#840102',
        marginLeft: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

    clickAspa: {
        backgroundColor: '#009F0B',
        marginLeft: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
})