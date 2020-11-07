import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        // essaye de s'inscrire
        // gère le succès en mettant à jour le state
        // gère l'échec en montrant un message
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Something went wrong' });
        }

    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // essaye de se connecter
        // gère le succès en mettant à jour le state
        // gère l'échec en montrant un message
    };
};

const signout = (dispatch) => {
    return () => {
        // se déconnecter
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout},
    { isSignedIn: false }
)