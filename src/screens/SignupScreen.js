import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Text>signup screen</Text>
            <Button
                title="Go to Signin"
                onPress={() => navigation.navigate("Signin")}
            />
            <Button
                title="Go to Main flow"
                onPress={() => navigation.navigate("MainFlow")}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default SignupScreen;