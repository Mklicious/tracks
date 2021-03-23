import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    useEffect(() =>{
        const listener = navigation.addListener('focus', () => fetchTracks());

        return listener;
    }, [navigation]);
    console.log(state);
    return (
        <>
            <Text style={{ fontSize: 48 }}>track list screen</Text>
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                    <ListItem>
                        <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    </TouchableOpacity>
                );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;