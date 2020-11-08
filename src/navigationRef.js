import { CommonActions  } from '@react-navigation/native';
// let portée limitée à celle du bloc courant
let navigator;

// accès au navigator
export const setNavigator = (nav) => {
    navigator = nav;
};
// change le state de react-navigation 
// et affiche un écran différent à l'utilisateur
// la fonction permet de naviguer dans l'application
// en dehors d'un composant React
export const navigate = (routeName, params) => {
    navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params
        })
    );
};