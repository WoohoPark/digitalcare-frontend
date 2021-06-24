import React from 'react';


import {
    Alert,
} from 'react-native';

const Kakao = () => {

    const kakaoLogin = () => {
        RNKakaoLogins.login((err, result) => {
            if (err) {
                Alert.alert('login error', err.toString());
                return "99";
            } else {

                Alert.alert('token', JSON.stringify(result));
                navigation.navigate('Main')

                return "00";
            }
        });
    };

    const kakaoLogOut = () => {
        RNKakaoLogins.logout((err, result) => {
            if (err) {
                Alert.alert('error', err.toString);
            }
            console.log(`${result}`);
        });
    };

    const kakaoProfile = () => {
        RNKakaoLogins.getProfile((err, result) => {
            if (err) {
                Alert.alert('error', err.toString);
            }
            Alert.alert('result2', JSON.stringify(result));
        })
    }
};

export default Kakao;