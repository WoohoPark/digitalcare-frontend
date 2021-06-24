import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';

const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appIconBox}>
                <Text>
                    메인
                </Text>
            </View>
            <View style={styles.appLoginBox}>
                <TouchableOpacity onPress={() => {
                    RNKakaoLogins.logout((err, result) => {
                        if (err) {
                            Alert.alert('error', err.toString);
                        }
                        navigation.navigate('Intro')
                        console.log(`${result}`);
                    });
                }} style={styles.kakaoLoginBtn}>
                    <Text style={styles.kakaoLoginText}>카카오 로그아웃</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appIconBox: {
        flex: 2,
        backgroundColor: 'gold'
    },
    appLoginBox: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: "center",
        alignItems: "center",
    },
    kakaoLoginBtn: {
        flex: 0.2,
        backgroundColor: 'blue',
        alignItems: "center",
        justifyContent: "center",

    },
    kakaoLoginText: {
        fontSize: 30,
        color: 'white'
    }
});

export default Main;