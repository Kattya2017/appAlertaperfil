import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FondoComponent from '../components/FondoComponent';
import alertaPerfilApi from '../api/alertaperfilApi';
import { Derivada, ResultAlertasDerivadas } from '../interface/AlertaDerivadaInterface';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsInformatico } from '../navigation/StackInformatico';
import socket from '../socket/socketApi';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface Props extends StackScreenProps<RootStackParamsInformatico, 'Inicio'> { };

const { width, height } = Dimensions.get('window');
const BandejaAlertasScreen = ({ navigation }: Props) => {

    const [listAlertas, setListAlertas] = useState<Derivada[]>([])
    useEffect(() => {
        mostrarAlerta();
    }, [])
    useEffect(() => {
        eschucharSocket();
    }, [])
    useEffect(() => {
        eschucharInformaticoSocket();
    }, [])



    const mostrarAlerta = async () => {
        try {

            const resp = await alertaPerfilApi.get<ResultAlertasDerivadas>('/alertaderivada/alerta/informatico',{params:{estado:1}});
            setListAlertas(resp.data.resp)
        } catch (error) {
            console.log(error);

        }
    }
    const eschucharSocket = async () => {
        try {
            socket.on(`nueva-alerta-derivada`, () => {
               mostrarAlerta()
            })
        } catch (error) {
            console.log(error);

        }

    }
    const eschucharInformaticoSocket = async () => {
        socket.on(`respuesta-alerta-derivada`, async (token) => {
            const tok = await AsyncStorage.getItem('token');
            if (tok === token) {
                mostrarAlerta();
            }

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
                                key={resp.id}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}
                            >
                                <View style={style.containerCuadro}>
                                    <View style={style.imgAlertas}>
                                        <Image source={{ uri: `https://backendalertapj.gongalsoft.com/api/uploads/tipoalerta/${resp.Alertum.TipoAlertum.id}/${(resp.Alertum.TipoAlertum.imagen) ? resp.Alertum.TipoAlertum.imagen : 'asasas'}` }}
                                            style={{ width: '80%', height: 81 }}
                                        />
                                    </View>
                                    <View style={{ width: '70%', marginBottom: 10 }}>
                                        <Text style={style.textCuadro}>{resp.Alertum.TipoAlertum.descripcion}</Text>
                                        <Text style={style.textAdministrado}>{resp.Alertum.Administrado.nombre} {resp.Alertum.Administrado.apellido}</Text>

                                        <Text style={style.textInformacion}>- {resp.sede}</Text>
                                        <Text style={style.textInformacion}>- {resp.organo}</Text>
                                        {
                                            (resp.unidad) ? <Text style={style.textInformacion}>- {resp.unidad}</Text> : ''
                                        }
                                        {
                                            (resp.area) ? <Text style={style.textInformacion}>- {resp.area}</Text> : ''
                                        }
                                        <Text style={style.textInformacion}>- Fecha       : {resp.fecha_inicio}</Text>
                                        <Text style={style.textInformacion}>- Hora         : {resp.hora_inicio}</Text>
                                        <Text style={style.textInformacion}>- Telefono  : {resp.Alertum.Administrado.telefono}</Text>
                                        <Text style={style.textInformacion}>- Anexo       : {resp.Alertum.Administrado.anexo}</Text>
                                        <Text style={style.textInformacion}>- Problema       : {resp.Alertum.descripcion}</Text>
                                        <View
                                            style={{ marginTop: 10 }}
                                        >
                                            <TouchableOpacity
                                                style={style.boton}
                                                onPress={() => navigation.navigate('Alertas', { id_alerta: resp.id })}
                                            >
                                                <Text style={{
                                                    color: 'white',
                                                    fontWeight: '700'
                                                }}>Atender</Text>
                                            </TouchableOpacity>
                                        </View>

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
        fontSize: 16,
        textAlign: 'center'
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
        fontSize: 12
    },

    boton: {
        backgroundColor: 'green',
        padding: 5,
        width: '80%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})