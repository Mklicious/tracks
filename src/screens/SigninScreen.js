import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    useEffect(() =>{
        const listener = navigation.addListener('focus', () => {
            clearErrorMessage();
        });

        return listener;
    }, [navigation]);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink
                routeName="Signup"
                text="You don't have an account? Sign up instead."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
   }
});

export default SigninScreen;