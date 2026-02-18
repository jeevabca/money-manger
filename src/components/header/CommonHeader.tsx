import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@react-native-vector-icons/ionicons'
import { useNavigation } from '@react-navigation/native'

type Props = {
    heading: string
    onBackPress?: () => void
}

const CommonHeader = ({ heading, onBackPress }: Props) => {
    const navigation = useNavigation()

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress()
        } else {
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            {/* Back button */}
            <TouchableOpacity style={styles.backIcon} onPress={handleBackPress}>
                <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>

            {/* Center title */}
            <Text style={styles.headingText}>{heading}</Text>
        </View>
    )
}

export default CommonHeader
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',

    },
    backIcon: {
        position: 'absolute',
        left: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5,
    },
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})
