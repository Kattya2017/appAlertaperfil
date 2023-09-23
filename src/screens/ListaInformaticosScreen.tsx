import React from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';


const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { };

const ListaInformaticosScrren = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <FondoComponent />
            <ScrollView style={styles.scrollContainer}>
                <View style={{ width, height, alignItems: 'center' }}>
                    <TouchableOpacity style={styles.cuadroContainer} onPress={() => navigation.navigate('Reporte')}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cuadroContainer}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cuadroContainer}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cuadroContainer}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cuadroContainer}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cuadroContainer}>
                        <View style={styles.igmInformatico}>
                            <Image source={require('../assets/img/informatico.png')}
                                style={{ width: '70%', height: '70%' }} />
                        </View>

                        <View style={{ width: '70%', height: '80%' }}>
                            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                            <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                        </View>
                    </TouchableOpacity>




                </View>

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
    },

    cuadroContainer: {
        width: '90%',
        height: 100,
        top: 20,
        marginBottom: 10,
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
        height: '100%'
    },

    textInformatico: {
        color: '#840102',
        width: '100%',
        marginTop: 20,
        fontWeight: '900',
        fontSize: 16
    },

    textCargo: {
        color: '#3D3D3D',
        width: '100%',
        height: '20%',
        marginTop: 5,
        fontWeight: '800'
    }
})