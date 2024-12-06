import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, PanResponder } from 'react-native';
import { Image } from 'react-native';


const HelpCenterScreen = () => {
    return (
        <View style={styles.container}>

            {/* Search Box */}
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#B0B0B0"
                />
                <TouchableOpacity style={styles.searchIconContainer}>
                    <Image source={require('@/assets/images/Search.png')} style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    backArrow: {
        fontSize: 18,
        color: '#4A4A4A',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4A4A4A',
        flex: 1,
        textAlign: 'center',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#4A4A4A',
    },
    searchIconContainer: {
        marginLeft: 5,
    },
    searchIcon: {
        fontSize: 18,
        color: '#B0B0B0',
    },
});

export default HelpCenterScreen;
