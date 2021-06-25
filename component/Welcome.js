import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import BottomTab from '../navigation/BottomTab';
const Welcome = ({ navigation }) => {
    return (
        <BottomTab></BottomTab>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topLine: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center"
    },
    middleLine: {
        flex: 12,
        backgroundColor: "purple",
        alignItems: "center",
        justifyContent: "center"
    },
    bottomLine: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default Welcome;