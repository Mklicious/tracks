// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { withNavigationFocus } from '@react-navigation/compat';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    
    const { state: { recording }, addLocation } = useContext(LocationContext);
    //renvoie un nouveau callback uniquement s'il y un changement dans les dépendances (start.recording).
    const callback = useCallback(location => {
        addLocation(location, recording);
    }, [recording]);
    const [error] = useLocation(isFocused || recording, callback);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map/>
            <TrackForm/>
            {error ? <Text>Enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);