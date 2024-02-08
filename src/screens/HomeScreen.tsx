
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FondoComponent from '../components/FondoComponent'
import alertaPerfilApi from '../api/alertaperfilApi';
import { Alertas, ResultAlertas } from '../interface/AlertaInterface';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAdmin } from '../navigation/StackAdmin';
import socket from '../socket/socketApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParamsAdmin, 'Inicio'> { };

const HomeScreen = ({ navigation }: Props) => {
    const [listAlertas, setListAlertas] = useState<Alertas[]>([]);
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [diaNumber, setDiaNumber] = useState('')
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false);
    const [output, setOutput] = useState('');
    useEffect(() => {
        cargarFecha();
    }, [])
    useEffect(() => {
        const date = new Date();
        const fen = date.getFullYear() + "-" +String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
        setOutput(fen)
        mostrarAlertas(fen);
    }, []);
    useEffect(() => {
        eschucharSocket();
    }, [])
    useEffect(() => {
        eschucharInformaticoSocket();
    }, []);

    const mostrarAlertaFecha=(fecha:Date)=>{
        const fen = fecha.getFullYear() + "-" +String(fecha.getMonth() + 1).padStart(2, "0") + "-" + String(fecha.getDate()).padStart(2, "0");
        setOutput(fen)
        setDate(fecha);
        mostrarAlertas(fen)
        
    }

    const mostrarAlertas = async (fecha:string) => {
        try {
            const resp = await alertaPerfilApi.get<ResultAlertas>('/alerta/ultimas/24',{params:{fecha}});
            setListAlertas(resp.data.resp);
        } catch (error) {
            console.log(error);

        }
    }
    const cargarFecha = () => {
        const date = new Date();
        const day = date.getDay();
        const dey = date.getDate();
        const month = date.getMonth();
        const ano = date.getFullYear();

        console.log(month);
        setAno(`${ano}`);
        setDiaNumber(`${dey}`);

        switch (day) {
            case 1:
                setDia('Lunes');
                break;
            case 2:
                setDia('Martes');
                break;
            case 3:
                setDia('Miercoles');
                break;
            case 4:
                setDia('Jueves');
                break;
            case 5:
                setDia('Viernes');
                break;
            case 6:
                setDia('Sabado');
                break;
            default:
                setDia('Domingo')
                break;
        }
        switch (month) {
            case 1:
                setMes('Febrero');
                break;
            case 2:
                setMes('Marzo');
                break;
            case 3:
                setMes('Abril');
                break;
            case 4:
                setMes('Mayo');
                break;
            case 5:
                setMes('Junio');
                break;
            case 6:
                setMes('Julio');
                break;
            case 7:
                setMes('Agosto');
                break;
            case 8:
                setMes('Setiembre');
                break;
            case 9:
                setMes('Octubre');
                break;
            case 10:
                setMes('Noviembre');
                break;
            case 11:
                setMes('Diciembre');
                break;
            default:
                setMes('Enero')
                break;
        }
        /* const fecha = date.toLocaleDateString("es-PE", { timeZone: "America/Lima" });
        console.log(fecha);
        const newFecha = new Date();
        console.log(newFecha.toDateString()); */
    };
    const eschucharSocket = async () => {
        try {
            socket.on(`nueva-alerta`, () => {
                const fecha = new Date();
                const fen = fecha.getFullYear() + "-" +String(fecha.getMonth() + 1).padStart(2, "0") + "-" + String(fecha.getDate()).padStart(2, "0");
                mostrarAlertas(fen)
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    const eschucharInformaticoSocket = async () => {
        socket.on(`informatico-alerta-derivada`, async (token) => {
            const tok = await AsyncStorage.getItem('token');
            if (tok === token) {
                const fecha = new Date();
                const fen = fecha.getFullYear() + "-" +String(fecha.getMonth() + 1).padStart(2, "0") + "-" + String(fecha.getDate()).padStart(2, "0");
                mostrarAlertas(fen)
            }

        })
    }
    return (
        <View style={styles.general}>
            <FondoComponent />
            <View
                style={{
                    width: '100%',
                    height: '4%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:5
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '95%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#840102',
                        borderRadius: 10,
                        flexDirection: 'row',

                    }}
                    onPress={() => setOpen(true)}
                >
                    <Icon
                        name='calendar-outline'
                        size={20}
                        color={'white'}
                    />
                    <Text
                        style={{
                            color: 'white',
                            marginLeft: 5
                        }}
                    >Seleccionar Fecha</Text>
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    mostrarAlertaFecha(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
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
                                            console.log({
                                                alerta: resp.TipoAlertum.descripcion,
                                                fecha: resp.fecha,
                                                hora: resp.hora,
                                                area: resp.Administrado.area,
                                                tipo_area: resp.Administrado.tipo_area,
                                                id_alerta: resp.id,
                                                administrado: `${resp.Administrado.nombre} ${resp.Administrado.apellido}`,
                                                telefono: resp.Administrado.telefono,
                                                anexo: resp.Administrado.anexo
                                            });

                                            navigation.navigate('Alertas', {
                                                alerta: resp.TipoAlertum.descripcion,
                                                fecha: resp.fecha,
                                                hora: resp.hora,
                                                area: resp.Administrado.area,
                                                tipo_area: resp.Administrado.tipo_area,
                                                id_alerta: resp.id,
                                                administrado: `${resp.Administrado.nombre} ${resp.Administrado.apellido}`,
                                                telefono: resp.Administrado.telefono,
                                                anexo: resp.Administrado.anexo
                                            })
                                        }
                                    }}
                                >
                                    <View style={styles.imageContainer}>
                                        <Image source={{ uri: `https://backendalertapj.gongalsoft.com/api/uploads/tipoalerta/${resp.TipoAlertum.id}/${(resp.TipoAlertum.imagen) ? resp.TipoAlertum.imagen : 'asasas'}` }}
                                            style={{ width: '93%', height: 60 }}
                                        />
                                        {/*  <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />*/}
                                    </View>
                                    <View style={styles.palabras}>
                                        <Text style={styles.texto}>{resp.TipoAlertum.descripcion}</Text>
                                        <Text style={styles.subTexto}>Administrado: {resp.Administrado.nombre} {resp.Administrado.apellido}</Text>
                                        <Text style={styles.subTexto}>Hora: {resp.hora}</Text>
                                        
                                        <Text style={styles.subTexto}>Descripcion:</Text>
                                        <Text style={styles.subTexto}>{resp.descripcion}</Text>
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
        height:'95%',
        alignItems: 'center',
        marginTop: 0,
    },
    container: {
        flexDirection: 'row',
        width: '95%',
        marginTop: 20
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
