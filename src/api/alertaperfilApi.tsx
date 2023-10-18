import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const baseURL = 'http://192.168.1.46:4000/api';


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