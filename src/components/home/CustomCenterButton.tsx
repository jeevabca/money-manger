import React from 'react'
import { TouchableOpacity, View } from 'react-native'

interface Props {
    children?: React.ReactNode
    onPress?: () => void
}

const CustomCenterButton: React.FC<Props> = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -25,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 65,
                height: 65,
                borderRadius: 40,
                backgroundColor: '#4A7C78',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',

                shadowColor: '#000',
                shadowOpacity: 0.3,

                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,



            }}
        >
            {children}
        </View>
    </TouchableOpacity>
);


export default CustomCenterButton

