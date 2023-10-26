import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const baseURL = 'https://backendalertapj.gongalsoft.com/api';


const alertaPerfilApi = axios.create({baseURL});
alertaPerfilApi.interceptors.request.use(
    async(config) =>{
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.token = token;
        }
        return config;
    }
);


export default alertaPerfilApi;