import { Modal, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../Constant'
import CommonHeader from '../components/header/CommonHeader'
import { getDBConnection, saveNotesItems } from '../Storage/database';

type Props = {
    modalVisible: boolean;
    onClose: () => void;
};

const AddCardScreen = ({ modalVisible, onClose }: Props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');



    const saveCardDetails = async () => {
        const db = await getDBConnection();
        await saveNotesItems(db, title, amount);
        setTitle('');
        setAmount('');
        onClose();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* header */}
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Add New Card Details</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.closeButton}>✕</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailLabel}>Card Title</Text>
                        <TextInput style={styles.detailValue} value={title} onChangeText={setTitle} />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailLabel}>Enter Amount</Text>
                        <TextInput style={styles.detailValue} value={amount} onChangeText={setAmount} />
                    </View>

                    {/* buttons */}
                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={saveCardDetails}>
                            <Text style={{ color: 'white' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddCardScreen

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 1,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
    },
    modalContent: {
        backgroundColor: COLORS.background,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 400,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    closeButton: {
        fontSize: 24,
        color: '#999',
        paddingRight: 10,
    },
    detailsContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    detailLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
    confirmButton: {
        flex: 1,
        backgroundColor: '#4A7C78',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
})