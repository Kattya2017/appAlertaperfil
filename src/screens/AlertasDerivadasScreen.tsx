import React,{useEffect,useState} from 'react'
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import FondoComponent from '../components/FondoComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsAdmin } from '../navigation/StackAdmin';
import alertaPerfilApi from '../api/alertaperfilApi';
import { ResultOrgano } from '../interface/OrganoInterface';
import { ResultUnidadOrganica } from '../interface/UnidadInterface';
import { ResultArea, Sede } from '../interface/AreaInterface';
import { Informatico, ResultInformatico } from '../interface/UsuarioInterface';

const {width, height} = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParamsAdmin, 'Alertas'>{};


const AlertasDerivadasScreen = ({navigation,route}:Props) => {

  const [sede, setSede] = useState('');
  const [organo, setOrgano] = useState('');
  const [unidad, setUnidad] = useState('');
  const [area, setArea] = useState('');
  const [informatico, setInformatico] = useState<Informatico[]>([])
  useEffect(() => {
    mostrarJurisdiccion();
  }, [])
  


  const mostrarJurisdiccion = async()=>{
    try {
      switch (String(route.params.tipo_area)) {
        case '1':
          const organo = await alertaPerfilApi.get<ResultOrgano>(`/organo/${route.params.area}`);
          console.log(organo.data.resp);
          setSede(organo.data.resp.Sede.nombre);
          setOrgano(organo.data.resp.nombre);
          setUnidad('');
          setArea('');
          break;
        case '2':
          const unidad = await alertaPerfilApi.get<ResultUnidadOrganica>(`/unidadorganica/${route.params.area}`);
          console.log(unidad.data.resp);
          setSede(unidad.data.resp.Organo.Sede.nombre);
          setOrgano(unidad.data.resp.Organo.nombre);
          setUnidad(unidad.data.resp.nombre);
          setArea('');
          break;
        case '3':
          const area = await alertaPerfilApi.get<ResultArea>(`/area/${route.params.area}`);
          console.log(area.data.resp);
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
  const mostrarInformatico =async()=>{
    try {
      const resp= await alertaPerfilApi.get<ResultInformatico>('/usuario/user/informatico');
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <View style={style.container}>
      <FondoComponent/>
      <View style={style.subContainer}>
        <Text style={style.textPrincipal}>{route.params.alerta}</Text>
        <View style={{width:'85%', marginTop:70}}>
         
          <Text style={style.textDescripcion}>Administrado: {route.params.administrado}</Text>
          <Text style={style.textDescripcion}>SEDE: {sede}</Text>
          <Text style={style.textDescripcion}>ORGANO: {organo}</Text>
          {
            (unidad!=='')?<Text style={style.textDescripcion}>UNIDAD: {unidad}</Text>:''
          }
          {
            (area!=='')?<Text style={style.textDescripcion}>AREA: {area}</Text>:''
          }
          <Text style={style.textDescripcion}>Fecha   :{route.params.fecha}</Text>
          <Text style={style.textDescripcion}>Hora     :{route.params.hora}</Text>
        
        </View>
       
        <View style={{justifyContent:'center', alignItems:'center'}}>

         {/*} <Dropdown
            label="Personal"
            placeholder="Seleccionar al personal informatico"
            checkboxLabelStyle={{color:'black'}}
            primaryColor={'red'}
            dropdownStyle={{backgroundColor:'white'}}
        />*/}

        <TouchableOpacity style={style.btnDerivar}>
          <Text style={style.BtnTexto}>DERIVAR</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default AlertasDerivadasScreen;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

    subContainer:{
      position: 'absolute',
      width: '90%',
      height: '60%',
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: '#840102',
      borderWidth:2,
      top:80
    },
    
    textPrincipal:{
      fontFamily:'Roboto-Bold',
      fontSize: 15,
      bottom:10,
      color:'#840102',
      marginTop:30,
      textAlign: 'center'
    },

    textDescripcion:{
      fontFamily: 'Roboto-Bold',
      color: 'black',
      fontSize: 13,
      justifyContent:'center',
      alignItems:'center',
      bottom:60,
      left:15
    },

    textDetalle:{
      fontFamily: 'Roboto-Bold',
      color: 'black',
      fontSize: 15,
      justifyContent:'center',
      alignItems:'center',
      bottom:60,
      left:15
    },


    btnDerivar:{
      backgroundColor:'#840102',
      width:'90%',
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    },

    BtnTexto:{
      color:'white',
      fontWeight:'bold',
      fontSize:17,
    }

    


})