
import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent'
import { StackScreenProps } from '@react-navigation/stack';


const {width,height} = Dimensions.get('window');
interface Props extends StackScreenProps<any, any>{};

const HomeScreen = ({navigation}: Props) => {

    return (
        <View style={styles.general}>
            <FondoComponent />
            <Text style={{marginTop:20, left:10, fontWeight:'900', color:'#464646'}} >Viernes, 15 setiembre de 2023</Text>
            <View style={styles.containerContent}>
                <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Lista')}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />
                    </View>
                    <View style={styles.palabras}>
                        <Text style={styles.texto}>SERVICIO TECNICO DE IMPRESORA</Text>
                        <Text style={styles.subTexto}>Sede de Administración</Text>
                        <Text style={styles.subTexto}>Fecha Ingreso:</Text>
                        <Text style={styles.subTexto}>Hora Ingreso:</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />
                    </View>
                    <View style={styles.palabras}>
                        <Text style={styles.texto}>SERVICIO TECNICO DE IMPRESORA</Text>
                        <Text style={styles.subTexto}>Sede de Administración</Text>
                        <Text style={styles.subTexto}>Fecha Ingreso:</Text>
                        <Text style={styles.subTexto}>Hora Ingreso:</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />
                    </View>
                    <View style={styles.palabras}>
                        <Text style={styles.texto}>SERVICIO TECNICO DE IMPRESORA</Text>
                        <Text style={styles.subTexto}>Sede de Administración</Text>
                        <Text style={styles.subTexto}>Fecha Ingreso:</Text>
                        <Text style={styles.subTexto}>Hora Ingreso:</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.logoImagen} source={require('../assets/img/alerta/redes-problema.png')} />
                    </View>
                    <View style={styles.palabras}>
                        <Text style={styles.texto}>SERVICIO TECNICO DE IMPRESORA</Text>
                        <Text style={styles.subTexto}>Sede de Administración</Text>
                        <Text style={styles.subTexto}>Fecha Ingreso:</Text>
                        <Text style={styles.subTexto}>Hora Ingreso:</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    general: {
        flex: 1,
    },
    containerContent:{
        width,//ahora
        height,
        alignItems:'center',
        marginTop:20,
    },
    container: {
        flexDirection:'row',
        //alignItems:'center',
        width:'95%',
        marginBottom:15
    },
    imageContainer: {
        //backgroundColor: '#FFE2E2',
        width: '20%',
        //justifyContent:'center',
        justifyContent:'center',
        alignItems: 'center'
    },
    palabras: {
        //backgroundColor: '#FFE2E2',
        width: '80%',
        borderBottomColor:'#840102',
        borderBottomWidth:0.9
    },
    logoImagen: {
        //backgroundColor:'red',
        width: 50,
        height: 50
    },
    texto:{
        fontWeight: 'bold',
        color: '#840102'
    },
    subTexto:{
        fontWeight:'bold',
        color:'#47525E',
        //top: 5
    }
    
});
