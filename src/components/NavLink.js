import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { navigate } from '../navigationRef';

const NavLink = ({ text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
});

export default NavLink;