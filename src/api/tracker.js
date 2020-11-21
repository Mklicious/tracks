import axios from 'axios';
import  AsyncStorage  from '@react-native-community/async-storage';

const instance = axios.create({
    baseURL: 'http://adba926bc5b7.ngrok.io'
});

//le token sera automatiquement renseigné à chaque requete.
instance.interceptors.request.use(
    //fonction executée à chaque requete
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    //fonction executée si erreur
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;