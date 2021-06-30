import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Map = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topLine}>
                <Text>
                    맵
                </Text>
            </View>
            <View style={styles.middleLine}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('MapDetail')
                }} style={styles.kakaoLoginBtn}>
                    <Text style={styles.kakaoLoginText}>맵 이동</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomLine}>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topLine: {
        flex: 1,
        backgroundColor: "pink",
    },
    middleLine: {
        flex: 12,
        backgroundColor: "purple",
    },
    bottomLine: {
        flex: 1,
        backgroundColor: "white",
    }
});

export default Map;