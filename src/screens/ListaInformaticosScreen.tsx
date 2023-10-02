import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsSupervisor } from '../navigation/StackSupervisor';
import alertaPerfilApi from '../api/alertaperfilApi';
import { Informatico, ResultInformatico } from '../interface/UsuarioInterface';


const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParamsSupervisor, 'Inicio'> { };

const ListaInformaticosScrren = ({ navigation }: Props) => {
    const [listInformatico, setListInformatico] = useState<Informatico[]>([]);

    useEffect(() => {
        mostrarInformatico();
    }, [])

    const mostrarInformatico = async () => {
        try {
            const resp = await alertaPerfilApi.get<ResultInformatico>('/usuario/user/informatico');
            setListInformatico(resp.data.resp);
            console.log(resp.data.resp);
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <View style={styles.container}>
            <FondoComponent />
            <ScrollView style={styles.scrollContainer}>
                {
                    listInformatico.map((resp, index) => {
                        return (
                            <View
                                key={resp.id}
                                style={{
                                    width: '100%',
                                    height: 120,
                                    alignItems: 'center',
                                    marginBottom: 10
                                }}
                            >
                                <TouchableOpacity 
                                    style={styles.cuadroContainer}
                                    onPress={()=>{navigation.navigate('Reporte',{id_usuario:resp.id,nombre:`${resp.nombre} ${resp.apellido}`})}}
                                >
                                    <View style={styles.igmInformatico}>
                                        <Image source={require('../assets/img/informatico.png')}
                                            style={{ height: '80%', width: '90%' }} />
                                    </View>

                                    <View style={{ width: '70%', height: '100%', justifyContent: 'center' }}>
                                        <Text style={styles.textInformatico}>{resp.nombre} {resp.apellido}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default ListaInformaticosScrren;


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    scrollContainer: {
        flex: 1,
        width,
        height,
        marginTop: 10
    },
    cuadroContainer: {
        width: '90%',
        height: '100%',
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

    igmInformatico: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },

    textInformatico: {
        color: '#840102',
        width: '100%',
        fontWeight: '900',
        fontSize: 16
    },

    textCargo: {
        color: '#3D3D3D',
        width: '100%',
        marginTop: 5,
        fontWeight: '800'
    }
})