import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text style={{ fontSize: 48 }}>track list screen</Text>
            <Button
                title="Go to track details"
                onPress={() => { navigation.navigate("TrackDetails") }}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;