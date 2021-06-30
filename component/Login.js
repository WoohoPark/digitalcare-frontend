import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { AsyncStorage } from 'AsyncStorage';
import RNKakaoLogins from 'react-native-kakao-logins';
import TabNavigator from '../navigation/TabNavigator';

const Login = ({ navigation }) => {

    const [_isLogin2, setisLogin2] = useState(false);

    return (
        <>
            {_isLogin2 ?
                <TabNavigator />
                :
                <View style={styles.container}>
                    <View style={styles.appIconBox}>
                        <Text>
                            로그인
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
                                        AsyncStorage.setItem('isLogin', true);
                                        navigation.navigate('TabNavigator');
                                    }
                                })
                            }}
                            title="카카오 로그인"
                            style={styles.kakaoLoginBtn}>
                            <Text style={styles.kakaoLoginText}>카카오 로그인</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
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

export default Login;