import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamList = {
    SplashScreen: undefined;
    HomeTabs: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SplashScreen'
>;

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("HomeTabs");
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient
            colors={['#43cea2', '#185a9d']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 4 }}
            style={styles.container}
        >
            <Text style={styles.text}>mono</Text>
        </LinearGradient>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 48,
        fontWeight: '900'
    }
})
