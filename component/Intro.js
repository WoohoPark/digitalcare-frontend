import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';

const kakaoLogin = () => {
    RNKakaoLogins.login((err, result) => {
        if (err) {
            Alert.alert('login error', err.toString());
            return "99";
        } else {
            Alert.alert('token', JSON.stringify(result));
            navigation.navigate('Main');
            return "00";
        }
    });
};

const Intro = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appIconBox}>
                <Text>
                    인트로
                </Text>
            </View>
            <View style={styles.appLoginBox}>
                <TouchableOpacity
                    onPress={() => {
                        RNKakaoLogins.login((err, result) => {
                            if (err) {
                                Alert.alert('login error', err.toString());
                                return "99";
                            } else {
                                Alert.alert('token', JSON.stringify(result));
                                navigation.navigate('Main');
                            }
                        });
                    }}
                    title="카카오 로그인"
                    style={styles.kakaoLoginBtn}>
                    <Text style={styles.kakaoLoginText}>카카오 로그인</Text>
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
        backgroundColor: 'pink',
        alignItems: "center",
        justifyContent: "center",
    },
    kakaoLoginText: {
        fontSize: 30,
        color: 'white',
    }
});

export default Intro;