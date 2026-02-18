import { ScrollView, StatusBar, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import BalanceCard from '../components/home/BalanceCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { getDBConnection, getNotesItems } from '../Storage/database';
import { cardItem } from '../Storage/types';
import { Ionicons } from '@react-native-vector-icons/ionicons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
    const [card, setCard] = useState<cardItem[]>([]);

    useEffect(() => {
        getInitialData();
    }, [])

    const getInitialData = async () => {
        const db = await getDBConnection();
        let data = await getNotesItems(db);
        setCard(data);
        console.log('Data:', data);
    }

    const totalBalance = card.reduce((sum, item) => sum + item.amount, 0);

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

            <LinearGradient
                colors={['#2F7E79', '#1B5C58', '#134440']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    {/* Header Section */}
                    <View style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
                            <View>
                                <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Welcome back</Text>
                                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 4 }}>Your Finances</Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: 45,
                                    height: 45,
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    borderRadius: 22.5,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Ionicons name="notifications-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Total Balance Card */}
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                borderRadius: 20,
                                padding: 20,
                                borderWidth: 1,
                                borderColor: 'rgba(255,255,255,0.2)',
                            }}
                        >
                            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 8 }}>
                                Total Balance
                            </Text>
                            <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>
                                ₹ {totalBalance.toLocaleString('en-IN')}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                <Ionicons name="trending-up" size={16} color="#4ADE80" />
                                <Text style={{ color: '#4ADE80', fontSize: 12, marginLeft: 4, fontWeight: '600' }}>
                                    +12.5% from last month
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Quick Actions */}


                    {/* Cards Section */}
                    <View style={{
                        flex: 1,
                        backgroundColor: '#F8F9FA',
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        paddingTop: 24,
                    }}>
                        <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1F2937' }}>
                                Your Accounts
                            </Text>
                            <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>
                                {card.length} active {card.length === 1 ? 'account' : 'accounts'}
                            </Text>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 20 }}
                        >
                            {card.length === 0 ? (
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 60,
                                    paddingHorizontal: 40
                                }}>
                                    <Ionicons name="wallet-outline" size={64} color="#D1D5DB" />
                                    <Text style={{
                                        color: '#6B7280',
                                        fontSize: 16,
                                        marginTop: 16,
                                        textAlign: 'center'
                                    }}>
                                        No accounts yet. Add your first account to get started!
                                    </Text>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: '#2F7E79',
                                            paddingHorizontal: 24,
                                            paddingVertical: 12,
                                            borderRadius: 12,
                                            marginTop: 20
                                        }}
                                        onPress={() => navigation.navigate("AddDetailScreen")}
                                    >
                                        <Text style={{ color: 'white', fontWeight: '600' }}>Add Account</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                card.map((item: any, index: number) => (
                                    <BalanceCard
                                        key={index}
                                        navigation={navigation}
                                        title={item.title}
                                        amount={item.amount}
                                    />
                                ))
                            )}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </>
    )
}

export default HomeScreen