import React from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent'

const { width, height } = Dimensions.get('window')

const ReporteAlertaScreen = () => {
    return (
        <View style={styles.container}>
            <FondoComponent />

            <ScrollView style={styles.ScrollView}>
                <View style={{ width, height, alignItems: 'center' }}>
                    <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                    <View style={styles.cuadro}>
                        <View style={styles.imgTipoalerta}>
                            <Image source={require('../assets/img/alerta/sistemas-informaticos.png')}
                                style={{ width: '75%', height: '55%' }} />
                        </View>
                        <View>
                            <Text style={styles.textAlerta}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={styles.textDescripcion}>- Sede Central</Text>
                            <Text style={styles.textDescripcion}>- Sala Civil</Text>
                            <Text style={styles.textDescripcion}>- Fecha: 21/09/2023</Text>
                            <Text style={styles.textDescripcion}>- Hora: 8:00 am</Text>
                        </View>
                        <View style={styles.bottomPendiente}>
                            <Text style={styles.bottomEstadoPendiente}>PENDIENTE</Text>
                        </View>
                    </View>

                    <View style={styles.cuadro}>
                        <View style={styles.imgTipoalerta}>
                            <Image source={require('../assets/img/alerta/sistemas-informaticos.png')}
                                style={{ width: '75%', height: '55%' }} />
                        </View>
                        <View>
                            <Text style={styles.textAlerta}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={styles.textDescripcion}>- Sede Central</Text>
                            <Text style={styles.textDescripcion}>- Sala Civil</Text>
                            <Text style={styles.textDescripcion}>- Fecha: 21/09/2023</Text>
                            <Text style={styles.textDescripcion}>- Hora: 8:00 am</Text>
                        </View>
                        <View style={styles.bottomPendiente}>
                            <Text style={styles.bottomEstadoPendiente}>PENDIENTE</Text>
                        </View>
                    </View>

                    <View style={styles.cuadro}>
                        <View style={styles.imgTipoalerta}>
                            <Image source={require('../assets/img/alerta/sistemas-informaticos.png')}
                                style={{ width: '75%', height: '55%' }} />
                        </View>
                        <View>
                            <Text style={styles.textAlerta}>SOPORTE TECNICO IMPRESORA</Text>
                            <Text style={styles.textDescripcion}>- Sede Central</Text>
                            <Text style={styles.textDescripcion}>- Sala Civil</Text>
                            <Text style={styles.textDescripcion}>- Fecha: 21/09/2023</Text>
                            <Text style={styles.textDescripcion}>- Hora: 8:00 am</Text>
                        </View>
                        <View style={styles.bottomPendiente}>
                            <Text style={styles.bottomEstado}>ATENDIDO</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default ReporteAlertaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    ScrollView: {
        flex: 1,
        width,
        height
    },

    textInformatico: {
        marginBottom: 10,
        fontWeight: '900',
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        top: 15
    },

    cuadro: {
        width: '90%',
        height: 150,
        top: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#840102',
        borderWidth: 1.5,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        flexDirection: 'row'
    },

    imgTipoalerta: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%'
    },

    textAlerta: {
        color: '#840102',
        width: '100%',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 15,
    },

    textDescripcion: {
        color: 'black',
        width: '100%',
        height: '13%',
        fontSize: 15,
        top: 10,
        fontWeight: '500'
    },

    bottom: {
        //backgroundColor:'red',
        width: '100%',
        height: 18,
        flexDirection: 'row',
        //marginToptop: 150,
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10
    },

    bottomEstado: {
        backgroundColor: '#009F0B',
        width: '25%',
        height: '100%',
        //bottom: 1,
        marginLeft: 190,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        color: 'white'
    },

    bottomPendiente: {
        //backgroundColor:'red',
        width: '100%',
        height: 18,
        flexDirection: 'row',
        //marginToptop: 150,
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10
    },

    bottomEstadoPendiente: {
        backgroundColor: 'red',
        width: '25%',
        height: '100%',
        //bottom: 1,
        marginLeft: 190,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        color: 'white'
    }

})