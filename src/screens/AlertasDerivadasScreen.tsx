import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity,Alert } from 'react-native';
import Dropdown from 'react-native-input-select';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAdmin } from '../navigation/StackAdmin';
import alertaPerfilApi from '../api/alertaperfilApi';
import { ResultOrgano } from '../interface/OrganoInterface';
import { ResultUnidadOrganica } from '../interface/UnidadInterface';
import { ResultArea, Sede } from '../interface/AreaInterface';
import { Informatico, ResultInformatico } from '../interface/UsuarioInterface';
import socket from '../socket/socketApi';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParamsAdmin, 'Alertas'> { };


const AlertasDerivadasScreen = ({ navigation, route }: Props) => {

  const [sede, setSede] = useState('');
  const [organo, setOrgano] = useState('');
  const [unidad, setUnidad] = useState('');
  const [area, setArea] = useState('');
  const [listInformatico, setListInformatico] = useState<Informatico[]>([]);
  const [informatico, setInformatico] = useState('');
  useEffect(() => {
    mostrarJurisdiccion();
  }, [])
  useEffect(() => {
    mostrarInformatico();
  }, [])



  const mostrarJurisdiccion = async () => {
    try {
      switch (String(route.params.tipo_area)) {
        case '1':
          const organo = await alertaPerfilApi.get<ResultOrgano>(`/organo/${route.params.area}`);
          setSede(organo.data.resp.Sede.nombre);
          setOrgano(organo.data.resp.nombre);
          setUnidad('');
          setArea('');
          break;
        case '2':
          const unidad = await alertaPerfilApi.get<ResultUnidadOrganica>(`/unidadorganica/${route.params.area}`);
          setSede(unidad.data.resp.Organo.Sede.nombre);
          setOrgano(unidad.data.resp.Organo.nombre);
          setUnidad(unidad.data.resp.nombre);
          setArea('');
          break;
        case '3':
          const area = await alertaPerfilApi.get<ResultArea>(`/area/${route.params.area}`);
          setSede(area.data.resp.UnidadOrganica.Organo.Sede.nombre);
          setOrgano(area.data.resp.UnidadOrganica.Organo.nombre);
          setUnidad(area.data.resp.UnidadOrganica.nombre);
          setArea(area.data.resp.nombre);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);

    }
  }
  const mostrarInformatico = async () => {
    try {
      const resp = await alertaPerfilApi.get<ResultInformatico>('/usuario/user/informatico');
      setListInformatico(resp.data.resp);
      console.log(resp.data.resp);


    } catch (error) {
      console.log(error);

    }
  }
  const derivarAlerta =async()=>{
    try {      
      if (!informatico) {
        Alert.alert('Informatico no seleccionado','Seleccionar el personal que atendera la alerta')
      }else{
        const data = {
          id_alerta:route.params.id_alerta,
          id_usuario:informatico,
          sede,
          organo,
          unidad,
          area
        }
        console.log(data);
        
        const resp = await alertaPerfilApi.post('/alertaderivada',data);
        socket.emit('nueva-alerta-derivada');
        
        navigation.push('Inicio');
      }
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <View style={style.container}>
      <FondoComponent />
      <View style={style.subContainer}>
        <Text style={style.textPrincipal}>{route.params.alerta}</Text>
        <View style={{ width: '95%', marginTop: 20 }}>

          <Text style={style.textDescripcion}>Administrado: {route.params.administrado}</Text>
          <Text style={style.textDescripcion}>SEDE: {sede}</Text>
          <Text style={style.textDescripcion}>ORGANO: {organo}</Text>
          {
            (unidad !== '') ? <Text style={style.textDescripcion}>UNIDAD: {unidad}</Text> : ''
          }
          {
            (area !== '') ? <Text style={style.textDescripcion}>AREA: {area}</Text> : ''
          }
          <Text style={style.textDescripcion}>Fecha    :{route.params.fecha}</Text>
          <Text style={style.textDescripcion}>Hora     :{route.params.hora}</Text>
          <Text style={style.textDescripcion}>Telefono     :{route.params.telefono}</Text>
          <Text style={style.textDescripcion}>Anexo     :{route.params.anexo}</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center',width:'100%', marginTop:10}}>

          <View style={{
            width:'90%'
          }}>
            <Dropdown
              label="Personal informatico"
              placeholder="Seleccionar el personal"
              options={
                listInformatico.map((resp, index) => {
                  return { label: `${resp.nombre} ${resp.apellido}`, value: `${resp.id}` }
                })

              } checkboxLabelStyle={{
                color: 'black'
              }}
              selectedValue={informatico}
              onValueChange={(value: string) => setInformatico(value)}
              primaryColor={'green'}
              dropdownStyle={{
                backgroundColor: 'white',
              }}
            />
          </View>
          {/*} <Dropdown
            label="Personal"
            placeholder="Seleccionar al personal informatico"
            checkboxLabelStyle={{color:'black'}}
            primaryColor={'red'}
            dropdownStyle={{backgroundColor:'white'}}
        />*/}

          <TouchableOpacity 
            style={style.btnDerivar}
            onPress={derivarAlerta}
          >
            <Text style={style.BtnTexto}>DERIVAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AlertasDerivadasScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  subContainer: {
    position: 'absolute',
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#840102',
    borderWidth: 2,
    top: 80
  },

  textPrincipal: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    bottom: 10,
    color: '#840102',
    marginTop: 30,
    textAlign: 'center'
  },

  textDescripcion: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 13,
    justifyContent: 'center',
    alignItems: 'center',
    left: 15
  },

  textDetalle: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    left: 15
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
  }




})