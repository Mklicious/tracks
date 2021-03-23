import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailsScreen = ({ route, navigation }) => {
    const { state } = useContext(TrackContext);
    const { _id } = route.params;

    const track = state.find(t => t._id === _id);
    return (
        <View>
            <Text>track details screen</Text>
            <Text>{track.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default TrackDetailsScreen;