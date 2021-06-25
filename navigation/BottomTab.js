import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import RNKakaoLogins from 'react-native-kakao-logins';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Naver from '../component/Naver';
import Kakao from '../component/Kakao';
import Welcome from '../component/Welcome';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function LogOutScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('login');
                    RNKakaoLogins.logout((err, result) => {
                        if (err) {
                            Alert.alert('error', err.toString);
                        }
                        console.log(`${result}`);

                    });
                }}
                title="카카오 로그아웃"
                style={styles.kakaoLoginBtn}>
                <Text style={styles.kakaoLoginText}>카카오 로그아웃</Text>
            </TouchableOpacity>
        </View>
    );
}


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="LogOutScreen" component={LogOutScreen} />
        </Tab.Navigator>

    );
}

export default BottomTab;

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