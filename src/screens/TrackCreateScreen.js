import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [error, setError] = useState('');

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map/>
            {error ? <Text>Enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;