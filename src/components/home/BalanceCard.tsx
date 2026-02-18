import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text } from 'react-native-gesture-handler';
import { currencyFormat } from '../../helper/helper';
import { COLORS } from '../../Constant';
import { Ionicons } from '@react-native-vector-icons/ionicons';

type Props = {
    navigation: any;
    title: string;
    amount: number;
};

const BalanceCard: React.FC<Props> = ({ navigation, title, amount }) => {

    const handleAddPress = () => {
        navigation.navigate("AddDetailScreen");
    };

    return (
        <SafeAreaView
            style={{
                marginHorizontal: 20,
                marginBottom: 20,
                borderRadius: 24,
                elevation: 4,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 8,
                backgroundColor: 'white',
            }}
        >
            <LinearGradient
                colors={['#2F7E79', '#1B5C58', '#134440']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                    borderRadius: 24,
                    padding: 20,
                }}
            >
                {/* Header with Title and Add Button */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 4 }}>Account</Text>
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 22 }} numberOfLines={1}>
                            {title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            width: 42,
                            height: 42,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: 21,
                            borderWidth: 1,
                            borderColor: 'rgba(255,255,255,0.3)'
                        }}
                        onPress={handleAddPress}
                    >
                        <Ionicons name="add" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Balance Amount */}
                <View style={{ marginBottom: 24 }}>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 4 }}>
                        Current Balance
                    </Text>
                    <Text style={{ color: 'white', fontSize: 32, fontWeight: 'bold' }}>
                        ₹ {currencyFormat(String(amount))}
                    </Text>
                </View>

                {/* Divider */}
                <View style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 16 }} />

                {/* Expenses and Dropdown */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <View style={{
                            width: 36,
                            height: 36,
                            backgroundColor: 'rgba(239, 68, 68, 0.2)',
                            borderRadius: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Ionicons name="trending-down" size={18} color="#FCA5A5" />
                        </View>
                        <View>
                            <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>Expenses</Text>
                            <Text style={{ color: '#FCA5A5', fontSize: 16, fontWeight: '700' }}>
                                - ₹ {currencyFormat(2500)}
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: 36,
                            height: 36,
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            borderRadius: 18,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Ionicons name='chevron-down-sharp' color="white" size={20} />
                    </TouchableOpacity>
                </View>

                {/* Quick Stats */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 16,
                    paddingTop: 16,
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(255,255,255,0.2)'
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginBottom: 4 }}>
                            Income
                        </Text>
                        <Text style={{ color: '#4ADE80', fontSize: 14, fontWeight: '600' }}>
                            +₹ {currencyFormat(5000)}
                        </Text>
                    </View>
                    <View style={{ width: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginBottom: 4 }}>
                            Saved
                        </Text>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>
                            ₹ {currencyFormat(String(amount - 2500))}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

export default BalanceCard