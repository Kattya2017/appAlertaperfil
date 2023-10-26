import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent'
import alertaPerfilApi from '../api/alertaperfilApi';
import socket from '../socket/socketApi';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Derivada, ResultAlertasDerivadas } from '../interface/AlertaDerivadaHoyInterface';

const { width, height } = Dimensions.get('window')
interface Props extends DrawerScreenProps<any, any> { };

const ReporteAdminScreen = ({ navigation, route }: Props) => {
    const [listAlertas, setListAlertas] = useState<Derivada[]>([])

    useEffect(() => {
        mostrarAlerta();
    }, [])
    useEffect(() => {
        eschucharSocket();
    }, [])
    

    const mostrarAlerta = async () => {
        try {
            const resp = await alertaPerfilApi.get<ResultAlertasDerivadas>(`/alertaderivada/derivada/hoy`);
            setListAlertas(resp.data.resp);
        } catch (error) {
            console.log(error);

        }
    }
    const eschucharSocket = async () => {
        socket.on(`nueva-alerta-derivada`, () => {
            mostrarAlerta()
        })
    }
    return (
        <View style={style.container}>
            <FondoComponent />

            <ScrollView style={style.ContainerScroll}>
                {
                    listAlertas.map((resp, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}
                            >
                                <View style={style.containerCuadro}>
                                    <View style={style.imgAlertas}>
                                    <Image source={{uri:`https://backendalertapj.gongalsoft.com/api/uploads/tipoalerta/${resp.Alertum.TipoAlertum.id}/${(resp.Alertum.TipoAlertum.imagen)?resp.Alertum.TipoAlertum.imagen:'asasas'}`}}
                                            style={{ width: '80%', height: 80 }}
                                        />
                                    </View>
                                    <View style={{ width: '70%', marginBottom: 10 }}>
                                        <Text style={style.textCuadro}>{resp.Alertum.TipoAlertum.descripcion}</Text>
                                        <Text style={style.textCuadro2}>Asignado        : {resp.Usuario.nombre} {resp.Usuario.apellido}</Text>
                                        <Text style={style.textAdministrado1}>Administrado : {resp.Alertum.Administrado.nombre} {resp.Alertum.Administrado.apellido}</Text>
                                        <Text style={style.textInformacion}>- {resp.sede}</Text>
                                        <Text style={style.textInformacion}>- {resp.organo}</Text>
                                        {
                                            (resp.unidad) ? <Text style={style.textInformacion}>- {resp.unidad}</Text> : ''
                                        }
                                        {
                                            (resp.area) ? <Text style={style.textInformacion}>- {resp.area}</Text> : ''
                                        }
                                        <Text style={style.textInformacion}>- Fecha     : {resp.fecha_inicio}</Text>
                                        <Text style={style.textInformacion}>- Hora      : {resp.hora_inicio}</Text>
                                        {
                                            (resp.id_estado === 1) ?
                                                <>
                                                    <Text
                                                        style={{
                                                            backgroundColor: '#B70000',
                                                            width: '90%',
                                                            textAlign: 'center',
                                                            borderRadius: 10,
                                                            padding: 5,
                                                            color: 'white',
                                                            fontWeight:'700',
                                                            bottom:-4,
                                                        }}
                                                    >Pendiente</Text>
                                                </> :
                                                <>
                                                    <Text
                                                        style={{
                                                            backgroundColor: 'green',
                                                            width: '90%',
                                                            textAlign: 'center',
                                                            borderRadius: 10,
                                                            padding: 5,
                                                            color: 'white',
                                                            fontWeight:'700',
                                                            bottom:-4,
                                                        }}
                                                    >Atendido</Text>
                                                </>
                                        }

                                    </View>

                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default ReporteAdminScreen;

const style = StyleSheet.create({
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
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        top: 15
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
        width: '95%',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 16,
        textAlign:'center'
    },
    textCuadro2:{
        color: '#000847',
        width: '95%',
        marginTop: 6,
        fontWeight: '700',
        fontSize: 14
    },
    textAdministrado1:{
        color: '#006271',
        width: '95%',
        //marginTop: 6,
        fontWeight: '700',
        fontSize: 14
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
        width: '95%',
        fontSize: 12,
    },

    boton: {
        backgroundColor: '#009F0B',
        padding: 10,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})