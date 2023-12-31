import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {RootStackParamsInformatico} from '../navigation/StackInformatico';
import FondoComponent from '../components/FondoComponent';
import {useForm} from '../hooks/useForm';
import alertaPerfilApi from '../api/alertaperfilApi';
import socket from '../socket/socketApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Atencion, ResultAtenciones} from '../interface/AtencionInterface';
import Dropdown from 'react-native-input-select';
interface Props
  extends StackScreenProps<RootStackParamsInformatico, 'Alertas'> {}

const ResponderAlerta = ({navigation, route}: Props) => {
  const [listAtencion, setListAtencion] = useState<Atencion[]>([]);
  const [tipoAtencion, setTipoAtencion] = useState('');
  useEffect(() => {
    mostrarAtencion();
  }, []);

  const {descripcion, form, onChange} = useForm({
    descripcion: '',
  });

  const atender = async () => {
    try {
      if (descripcion === '' || tipoAtencion==='') {
        Alert.alert(
          'Datos incorrectos',
          'Para atender la alerta es necesario completar todos los campos',
        );
      } else {
        const data = {
          descripcion,
          id_estado:tipoAtencion
        };
        console.log(data);
        const resp = await alertaPerfilApi.put(
          `/alertaderivada/${route.params.id_alerta}`,
          data,
        );
        socket.emit('nueva-alerta-derivada');
        form.descripcion = '';
        setTipoAtencion('')
        const token = await AsyncStorage.getItem('token');
        socket.emit('respuesta-alerta-derivada', token);
        navigation.push('Inicio');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const mostrarAtencion = async () => {
    try {
      const resp = await alertaPerfilApi.get<ResultAtenciones>('/estado');
      setListAtencion(resp.data.resp);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={style.container}>
      <FondoComponent />

      <View
        style={{
          alignItems: 'center',
          width: '100%',
          marginTop:30
        }}>
          <Text
            style={{
              color:'black',
              fontWeight:'bold',
              fontSize:20,
              marginBottom:20,
              textDecorationLine:'underline'
            }}
          >Responder Alerta Derivada</Text>
        <View
          style={{
            width: '90%',
          }}>
          <Dropdown
            label="Tipo de Atencion"
            placeholder="Seleccionar Tipo de Atencion"
            options={listAtencion.map((resp, index) => {
              return {label: `${resp.tipo}`, value: `${resp.id}`};
            })}
            checkboxLabelStyle={{
              color: 'black',
            }}
            selectedValue={tipoAtencion}
            onValueChange={(value: string) => setTipoAtencion(value)}
            primaryColor={'green'}
            dropdownStyle={{
              backgroundColor: 'white',
            }}
          />
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: '#fff',
            height: 120,
            borderRadius: 10,
            borderColor: '#004F79',
            borderWidth: 1,
            marginBottom: 20,
          }}>
          <TextInput
            style={{
              width: '100%',
              height: '100%',
              color: 'black',
            }}
            /* onChangeText={onChangeNumber}
              value={number} */
            placeholder="Ingrese una descripcion"
            placeholderTextColor={'black'}
            keyboardType="default"
            multiline={true}
            numberOfLines={5}
            onChangeText={value => onChange(value, 'descripcion')}
            value={descripcion}
          />
        </View>

        <TouchableOpacity style={style.btnDerivar} onPress={atender}>
          <Text style={style.BtnTexto}>Atender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResponderAlerta;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    position: 'absolute',
    width: '90%',
    height: '60%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#840102',
    borderWidth: 2,
    top: 80,
  },

  textPrincipal: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    bottom: 10,
    color: '#840102',
    marginTop: 30,
    textAlign: 'center',
  },

  textDescripcion: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 13,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60,
    left: 15,
  },

  textDetalle: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 60,
    left: 15,
  },

  btnDerivar: {
    backgroundColor: '#840102',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  BtnTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
