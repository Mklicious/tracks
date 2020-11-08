import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);
    useEffect(() => { tryLocalSignin() }, []);

    return (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
  
  export default LoadingScreen;