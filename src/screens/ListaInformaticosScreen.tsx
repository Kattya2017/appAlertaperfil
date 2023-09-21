import React from 'react'
import { StyleSheet, View, Text, ScrollView, Dimensions, Image, TouchableOpacity  } from 'react-native';
import FondoComponent from '../components/FondoComponent';


const {width, height} = Dimensions.get('window')

const ListaInformaticosScrren = () => {
  return (
    <View style={styles.container}>
        <FondoComponent/>
        <ScrollView style={styles.scrollContainer}>
            <View style={{width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                <View style={styles.cuadroContainer}>
                    <View style={styles.igmInformatico}>
                         <Image source={require('../assets/img/informatico.png')}
                         style={{width: '70%', height: '70%'}}/>
                    </View>
                    
                    <View style={{width: '70%', height: '80%'}}>
                        <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                        <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                    </View>
                </View>
            </View>

            <View style={{width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', bottom:80}}>
                <View style={styles.cuadroContainer}>
                    <View style={styles.igmInformatico}>
                         <Image source={require('../assets/img/informatico.png')}
                         style={{width: '70%', height: '70%'}}/>
                    </View>

                    <View style={{width: '70%', height: '80%'}}>
                        <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                        <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                    </View>
                </View>
            </View>

            <View style={{width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', bottom:150}}>
                <View style={styles.cuadroContainer}>
                    <View style={styles.igmInformatico}>
                         <Image source={require('../assets/img/informatico.png')}
                         style={{width: '70%', height: '70%'}}/>
                    </View>

                    <View style={{width: '70%', height: '80%'}}>
                        <Text style={styles.textInformatico}>ROGER PANDURO LOPEZ</Text>
                        <Text style={styles.textCargo}>SOPORTE DE IMPRESORA</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
        
        
    </View>
  )
}

export default ListaInformaticosScrren;


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    scrollContainer:{
        flex: 1,
        width,
        height
    },

    cuadroContainer:{
       width: '90%',
       height: '50%',
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

    igmInformatico:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%'
    },

    textInformatico:{
        color:'#840102',
        width: '100%',
        marginTop: 20,
        fontWeight: '900',
        fontSize: 16
    },

    textCargo:{
        color:'#3D3D3D',
        width: '100%',
        height: '20%',
        marginTop: 5,
        fontWeight: '800'
    }
})