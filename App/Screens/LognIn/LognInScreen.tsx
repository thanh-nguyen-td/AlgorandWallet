import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import styles from './LognInStyle'

export const LognIn = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text>thsnh</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 30 }}>
                <Text style={{ width: 200, fontSize: 20, fontWeight: '600', textAlign: 'center' }}>Manage all assets from one app</Text>
                <TouchableOpacity style={{ backgroundColor: 'pink', height: Dimensions.get('window').height / 14, width: '100%', borderRadius: 25, marginTop: Dimensions.get('window').height / 15, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Create Accout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'pink', height: Dimensions.get('window').height / 14, width: '100%', borderRadius: 25, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Pair Ledger Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}