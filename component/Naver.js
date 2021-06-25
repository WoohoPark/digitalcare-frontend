import React from 'react';
import RNKakaoLogins from 'react-native-kakao-logins';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Kakao = () => {
    <View style={styles.container}>
        <View style={styles.topLine}>
            <Text>
                메인
            </Text>
        </View>
        <View style={styles.middleLine}>
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
        <View style={styles.bottomLine}>
            <BottomTab />
        </View>
    </View>
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

export default Kakao;