import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import  AsyncStorage  from '@react-native-community/async-storage';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    // essaye de s'inscrire
    // gère le succès en mettant à jour le state
    // gère l'échec en montrant un message
    try {
        const response = await trackerApi.post('/signup', { email, password });
        //enregistre le token sur l'appareil
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong' });
    }

};

const signin = (dispatch) => async ({ email, password }) => {
    // essaye de se connecter
    // gère le succès en mettant à jour le state
    // gère l'échec en montrant un message
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong' });
    }
};

const signout = (dispatch) => {
    return () => {
        // se déconnecter
    };
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage},
    { token: null, errorMessage: '' }
)