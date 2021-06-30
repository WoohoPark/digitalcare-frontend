import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const MapDetail = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topLine}>
                <Text>
                    맵 그리기
                </Text>
            </View>
            <View style={styles.middleLine}>
                <Text>여기다 그려요</Text>
            </View>
            <View style={styles.bottomLine}>
            </View>
        </View>
    );
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

export default MapDetail;