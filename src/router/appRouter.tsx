import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, View, ImageBackground, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

import { Ionicons } from '@react-native-vector-icons/ionicons';
import CustomCenterButton from '../components/home/CustomCenterButton';
import AddDetailScreen from '../screens/AddDetailScreen';
import StatsScreen from '../screens/StatsScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddCardScreen from '../screens/AddCardScreen';
import { COLORS } from '../Constant';
import { GestureHandlerRootView } from 'react-native-gesture-handler';







const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<BottomTabBarProps> = ({
    state,
    descriptors,
    navigation,
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            {/* Bottom Sheet Modal */}
            <AddCardScreen
                modalVisible={modalVisible}
                onClose={() => setModalVisible(false)}
            />

            {/* Tab Bar */}
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <ImageBackground
                    source={require('../assets/tab-bar-bg.png')}
                    style={{
                        height: 80,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        paddingBottom: 10,
                    }}
                    resizeMode="stretch"
                >
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const isFocused = state.index === index;
                        const isCenter = index === 2;

                        if (isCenter) {
                            return (
                                <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                                    <CustomCenterButton onPress={() => setModalVisible(true)}>
                                        <Ionicons name="add" size={34} color="white" />
                                    </CustomCenterButton>
                                </View>
                            );
                        }

                        return (
                            <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate(route.name)}
                                >
                                    {options.tabBarIcon?.({
                                        focused: isFocused,
                                        color: '',
                                        size: 28,
                                    })}
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ImageBackground>
            </View>
        </>
    );
};

// Tabs without Splash
const HomeTabs = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName={'Home'}
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{
                    headerShown: false,

                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={focused ? "home" : "home-outline"} size={28} color={focused ? COLORS.primary : COLORS.textSecondary} />
                        ),
                        tabBarLabel: 'Home',
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: '600',
                            color: COLORS.textSecondary,
                        },
                        tabBarIconStyle: {
                            marginTop: 2,
                        },
                    }}
                />

                <Tab.Screen
                    name="Stats"
                    component={StatsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="stats-chart" size={28} color={focused ? COLORS.primary : COLORS.textSecondary} />
                        )
                    }}
                />

                <Tab.Screen
                    name="AddDummy"
                    component={() => null}
                    options={{
                        tabBarIcon: () => null,
                    }}
                />



                <Tab.Screen
                    name="Wallet"
                    component={WalletScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name="wallet" size={28} color={focused ? COLORS.primary : COLORS.textSecondary} />
                        )
                    }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Ionicons name={focused ? "person" : "person-outline"} size={28} color={focused ? 'green' : 'grey'} />
                        )
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const AppRouter = () => {
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen name="HomeTabs" component={HomeTabs} />
                    <Stack.Screen name="AddDetailScreen" component={AddDetailScreen} />
                    <Stack.Screen name='StatsScreen' component={StatsScreen} />
                    <Stack.Screen name='WalletScreen' component={WalletScreen} />
                    <Stack.Screen name='ProfileScreen' component={ProfileScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default AppRouter;