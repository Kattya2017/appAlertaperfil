import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent'
import { RootStackParamsSupervisor } from '../navigation/StackSupervisor';
import { StackScreenProps } from '@react-navigation/stack';
import alertaPerfilApi from '../api/alertaperfilApi';
import { Derivada, ResultAlertasDerivadas } from '../interface/AlertaDerivadaInterface';
import socket from '../socket/socketApi';

const { width, height } = Dimensions.get('window')
interface Props extends StackScreenProps<RootStackParamsSupervisor, 'Reporte'> { };
const ReporteAlertaScreen = ({ navigation, route }: Props) => {
    const [listAlertas, setListAlertas] = useState<Derivada[]>([])

    useEffect(() => {
        mostrarAlerta();
    }, [])
    useEffect(() => {
        eschucharSocket();
    }, [])
    

    const mostrarAlerta = async () => {
        try {
            const resp = await alertaPerfilApi.get<ResultAlertasDerivadas>(`/alertaderivada/alerta/informatico/${route.params.id_usuario}`);
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
            <View
                style={{
                    width,
                }}
            >
                <Text style={style.textInformatico}>{route.params.nombre.toLocaleLowerCase()}</Text>
            </View>

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
                                        <Image source={{uri:`http://192.168.235.127:4000/api/uploads/tipoalerta/${resp.Alertum.TipoAlertum.id}/asasa`}}
                                            style={{ width: '80%', height: 80 }}
                                        />
                                    </View>
                                    <View style={{ width: '70%', marginBottom: 10 }}>
                                        <Text style={style.textCuadro}>{resp.Alertum.TipoAlertum.descripcion}</Text>
                                        <Text style={style.textInformacion}>{resp.Alertum.Administrado.nombre} {resp.Alertum.Administrado.apellido}</Text>
                                        <Text style={style.textdetalle}>- {resp.sede}</Text>
                                        <Text style={style.textdetalle}>- {resp.organo}</Text>
                                        {
                                            (resp.unidad) ? <Text style={style.textdetalle}>- {resp.unidad}</Text> : ''
                                        }
                                        {
                                            (resp.area) ? <Text style={style.textdetalle}>- {resp.area}</Text> : ''
                                        }
                                        <Text style={style.textdetalle}>- Fecha : {resp.fecha_inicio}</Text>
                                        <Text style={style.textdetalle}>- Hora   : {resp.hora_inicio}</Text>
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
                                                            bottom:-4
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
                                                            bottom:-4
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

export default ReporteAlertaScreen;

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
        width: '100%',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 16,
        textAlign:'center'
    },

    textAdministrado: {
        color: '#004F79',
        width: '100%',
        marginTop: 5,
        fontSize: 14,
        fontWeight: '900'
    },

    textInformacion: {
        color: '#004F79',
        width: '100%',
        marginTop: 5,
        fontSize: 14,
        fontWeight: '900'
    },
    textdetalle: {
        color: '#343F4B',
        width: '95%',
        fontSize: 12
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