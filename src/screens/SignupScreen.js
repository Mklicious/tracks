import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    useEffect(() =>{
        const listener = navigation.addListener('focus', () => {
            clearErrorMessage();
        });

        return listener;
    }, [navigation]);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signup}
                submitButtonText="Sign Up"
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead."
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

export default SignupScreen;