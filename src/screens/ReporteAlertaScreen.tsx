import React from 'react'
import { StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native';
import FondoComponent from '../components/FondoComponent'

const {width, height} = Dimensions.get('window')

const ReporteAlertaScreen = () => {
  return (
    <View style={styles.container}>
        <FondoComponent/>
        
        <ScrollView style={styles.ScrollView}>
            <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
            <View style={{width:'100%', height:140, justifyContent:'center', alignItems:'center', marginBottom: 10}}>
                <View style={styles.cuadro}>
                    <View style={styles.imgTipoalerta}>
                        <Image source={require('../assets/img/alerta/redes-problema.png')}
                        style={{width: '75%', height: '55%'}}/>
                    </View>
                    <View>
                        <Text style={styles.textAlerta}>SOPORTE TECNICO IMPRESORA</Text>
                        <Text style={styles.textDescripcion}>- Sede Central</Text>
                        <Text style={styles.textDescripcion}>- Sala Civil</Text>
                        <Text style={styles.textDescripcion}>- Fecha:</Text>
                        <Text style={styles.textDescripcion}>- Hora:</Text>
                    </View>
                    <View style={styles.bottom}>
                        
                            <Text>ATENDIDO</Text>
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ReporteAlertaScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ScrollView:{
        flex:1,
        width,
        height,
        marginTop: 80
    },

    textInformatico:{
        marginBottom:25,
        fontWeight:'900',
        color:'black',
        textAlign:'center',
        fontSize:25
    },

    cuadro:{
        width: '90%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#840102',
        borderWidth: 1.5,
        shadowOffset:{
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
        flexDirection: 'row'
    },

    imgTipoalerta:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%'
    },

    textAlerta:{
        color: '#840102',
        width: '100%',
        marginTop: 10,
        fontWeight: '900',
        fontSize: 15,
    },

    textDescripcion:{
        color:'black',
        width: '100%',
        height: '13%',
        fontSize: 15,
        top:10
    },

    bottom:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-evenly',
        right: 15,
        bottom: 30
    },

    bottomEstado:{
        backgroundColor: '#009F0B',
        width: '18%',
        height: '75%',
        bottom: 3,
        marginLeft: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})