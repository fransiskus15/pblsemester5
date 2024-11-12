import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
    const [isFacePayEnabled, setIsFacePayEnabled] = useState(false);

    const toggleFacePaySwitch = () => {
        setIsFacePayEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => alert('Back pressed')}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Akun</Text>
                <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
            </View>

            {/* Content */}
            <Text style={styles.dateText}>Today</Text>

            <View style={styles.optionContainer}>
                <View style={styles.option}>
                    <MaterialCommunityIcons name="lock" size={24} color="#5DADE2" style={styles.icon} />
                    <Text style={styles.optionText}>Ganti Pin</Text>
                </View>
                <View style={styles.divider} />

                <View style={styles.option}>
                    <MaterialCommunityIcons name="face-recognition" size={24} color="#5DADE2" style={styles.icon} />
                    <Text style={styles.optionText}>Face Pay</Text>
                    <Switch
                        trackColor={{ false: "#E0E0E0", true: "#5DADE2" }}
                        thumbColor={isFacePayEnabled ? "#32A7E2" : "#f4f3f4"}
                        ios_backgroundColor="#E0E0E0"
                        onValueChange={toggleFacePaySwitch}
                        value={isFacePayEnabled}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    dateText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    optionContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    icon: {
        marginRight: 8,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 8,
    },
});

export default AccountScreen;
