import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>track create screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;