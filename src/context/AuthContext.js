import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import  AsyncStorage  from '@react-native-community/async-storage';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {isLoading: false, ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return {...state, errorMessage: '' };
        case 'no_token':
            return {...state, isLoading: false };
        case 'signout':
            return {errorMessage: '', token: null };
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

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout', payload: null });
};

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
}

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin' });
    } else {
        dispatch({ type: 'no_token' });
    }
} 

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '', isLoading: true }
)