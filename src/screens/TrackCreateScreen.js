import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const [error, setError] = useState('');
    const { addLocation } = useContext(LocationContext);


    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                location => {
                    addLocation(location);
                }
            );
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