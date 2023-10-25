import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';
import Dropdown from 'react-native-input-select';
import { ResultTipoAlerta, TipoAlerta } from '../interface/TipoAlertaInterface';
import alertaPerfilApi from '../api/alertaperfilApi';
import { Informatico, ResultInformatico } from '../interface/UsuarioInterface';
const ReportAdminScreen = () => {
  const [tipo, setTipo] = useState('');
  const [informatico, setInformatico] = useState('');

  const [listTipo, setListTipo] = useState<TipoAlerta[]>([]);
  const [listUsuario, setListUsuario] = useState<Informatico[]>([]);
  useEffect(() => {
    mostrarTipo();
  }, [])
  useEffect(() => {
    mostrarInformatico();
  }, [])


  const mostrarTipo = async () => {
    try {
      const resp = await alertaPerfilApi.get<ResultTipoAlerta>('/tipoalerta', { params: { estado: 1 } });
      resp.data.resp.push({
        "id": 0,
        "descripcion": "TODOS",
        "imagen": null,
        "estado": 1
      })
      setListTipo(resp.data.resp);
    } catch (error) {
      console.log(error);

    }
  }
  const mostrarInformatico = async () => {
    try {
      const resp = await alertaPerfilApi.get<ResultInformatico>('/usuario/user/informatico');
      resp.data.resp.push({
        "id": 0,
        "nombre": "TODOS",
        "apellido": "",
        "usuario": "kgrados",
        "password": "$2a$10$H3LdXQl3.uqAKDtu7lh2lOj8e.ZyZZPm19/y8VwGGiSrZsMfAH3ae",
        "id_rol": 3,
        "estado": 1
      })
      setListUsuario(resp.data.resp);
    } catch (error) {
      console.log(error);

    }
  }
  const descargarPDFTipo=async()=>{
    try {
      if (tipo==='') {
        Alert.alert('Seleccionar una opcion','No se selecciono ningun tipo de alerta')
      }else{
        const url = `http://209.45.80.77:4001/api/reporte/alerta/${tipo}`;
        await Linking.openURL(url);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const descargarPDFInformatico=async()=>{
    try {
      if (tipo==='') {
        Alert.alert('Seleccionar una opcion','No se selecciono ningun tipo de alerta')
      }else{
        const url = `http://209.45.80.77:4001/api/reporte/alertaderivada/${informatico}`;
        await Linking.openURL(url);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.containerAlerta}
      >
        <Dropdown
          label="Reporte por tipos de alertas"
          placeholder="Seleccionar una opcion"
          options={
            listTipo.map((resp, index) => {
              return { label: resp.descripcion, value: `${resp.id}` }
            })
          }
          selectedValue={tipo}
          onValueChange={(value: string) => setTipo(value)}
          primaryColor={'#840102'}
          checkboxLabelStyle={{
            color: 'black'
          }}
          dropdownStyle={{
            backgroundColor: 'white',
          }}
        />
        <Button
          color={'#840102'}
          title='Generar Reporte'
          onPress={descargarPDFTipo}
        />
      </View>
      <View
        style={styles.containerAlerta}
      >
        <Dropdown
          label="Reporte de alertas derivadas por informático"
          placeholder="Seleccionar una opcion"
          options={
            listUsuario.map((resp, index) => {
              return { label: `${resp.nombre} ${resp.apellido}`, value: `${resp.id}` }
            })
          }
          selectedValue={informatico}
          onValueChange={(value: string) => setInformatico(value)}
          primaryColor={'green'}
          checkboxLabelStyle={{
            color: 'black'
          }}
          dropdownStyle={{
            backgroundColor: 'white',
          }}
        />
        <Button
          title='Generar Reporte'
          onPress={descargarPDFInformatico}
          color={'#840102'}
        />
      </View>
    </View>
  )
}

export default ReportAdminScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerAlerta: {
    width: '90%',
    marginTop: 20,
    marginBottom: 100
  }
})