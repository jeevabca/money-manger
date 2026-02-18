import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../Constant'

const AddDetailScreen = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent />
            <SafeAreaView style={styles.container}>

                <View style={styles.content}>
                    <Text style={styles.label}>Add Details</Text>


                    <TextInput
                        style={styles.input}
                        placeholder="Enter Title"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Amount"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Description"
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#4A7C78',
                            paddingVertical: 15,
                            paddingHorizontal: 60,
                            borderRadius: 30,
                            marginBottom: 30,
                            alignSelf: 'center'
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}

export default AddDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c6d4d2ff',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
        gap: 20,

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '90%',
        paddingHorizontal: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 10,

    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
})