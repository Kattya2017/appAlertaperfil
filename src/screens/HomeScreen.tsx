
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent'
import alertaPerfilApi from '../api/alertaperfilApi';
import { Alertas, ResultAlertas } from '../interface/AlertaInterface';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAdmin } from '../navigation/StackAdmin';
import socket from '../socket/socketApi';


const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParamsAdmin, 'Inicio'> { };

const HomeScreen = ({ navigation }: Props) => {
    const [listAlertas, setListAlertas] = useState<Alertas[]>([]);


    useEffect(() => {
        cargarFecha();
    }, [])
    useEffect(() => {
        mostrarAlertas();
    }, []);
    useEffect(() => {
      eschucharSocket();
    }, [])
    

    const mostrarAlertas = async () => {
        try {
            const resp = await alertaPerfilApi.get<ResultAlertas>('/alerta/ultimas/24');
            setListAlertas(resp.data.resp);
            console.log(resp.data.resp);

        } catch (error) {
            console.log(error);

        }
    }

    const cargarFecha = () => {
        const date = new Date();
        console.log(date.toDateString());
        const fecha = date.toLocaleDateString("es-PE", { timeZone: "America/Lima" });
        console.log(fecha);
        const newFecha = new Date();
        console.log(newFecha.toDateString());
    };

    const eschucharSocket = async () => {
        socket.on(`nueva-alerta`, () => {
            mostrarAlertas()
        })
    }
    return (
        <View style={styles.general}>
            <FondoComponent />
            <Text style={{ marginTop: 20, left: 10, fontWeight: '900', color: '#464646' }} >Viernes, 15 setiembre de 2023</Text>
            <View style={styles.containerContent}>
                <ScrollView>
                    {
                        listAlertas.map((resp, index) => {
                            return (
                                <TouchableOpacity
                                    key={resp.id}
                                    style={styles.container}
                                    onPress={() => {
                                        if (resp.estado === 1) {
                                            Alert.alert('Alerta Derivada', 'Esta alerta ya fue asignada a un personal de informatica, vaya la seccion alertas derivadas para ver su proceso')
                                        } else {
                                            navigation.navigate('Alertas', {
                                                alerta: resp.TipoAlertum.descripcion,
                                                fecha: resp.fecha,
                                                hora: resp.hora,
                                                area: resp.Administrado.area,
                                                tipo_area: resp.Administrado.tipo_area,
                                                id_alerta: resp.id,
                                                administrado: `${resp.Administrado.nombre} ${resp.Administrado.apellido}`
                                            })
                                        }
                                    }}
                                >
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />
                                    </View>
                                    <View style={styles.palabras}>
                                        <Text style={styles.texto}>{resp.TipoAlertum.descripcion}</Text>
                                        <Text style={styles.subTexto}>Sede de Administración</Text>
                                        <Text style={styles.subTexto}>Hora: {resp.hora}</Text>
                                        {
                                            (resp.estado === 0) ? <Text style={{ ...styles.subTexto, color: 'red' }}>Sin atencion</Text> : <Text style={{ ...styles.subTexto, color: 'green' }}>Derivado</Text>
                                        }

                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>


            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    general: {
        flex: 1,
    },
    containerContent: {
        width,
        height,
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        flexDirection: 'row',
        width: '95%',
        marginBottom: 25
    },
    imageContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    palabras: {
        width: '80%',
        borderBottomColor: '#840102',
        borderBottomWidth: 0.9
    },
    logoImagen: {
        width: 50,
        height: 50
    },
    texto: {
        fontWeight: 'bold',
        color: '#840102'
    },
    subTexto: {
        fontWeight: 'bold',
        color: '#47525E',
        //top: 5
    }

});
