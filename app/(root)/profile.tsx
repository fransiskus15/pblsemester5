import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import images from '@/constants/images';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>


            <View style={styles.avatarContainer}>
                <Image
                    source={images.avatar} // Replace with actual avatar image URL
                    style={styles.avatar}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nama Lengkap</Text>
                <TextInput style={styles.input} placeholder="Twilight" />

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="twilight@gmail.com" keyboardType="email-address" />

                <Text style={styles.label}>Tanggal Lahir</Text>
                <View style={styles.inputDateContainer}>
                    <TextInput style={styles.inputDate} placeholder="15/03/2003" />
                    <MaterialCommunityIcons name="calendar" size={24} color="gray" />
                </View>

                <Text style={styles.label}>No Telepon</Text>
                <View style={styles.phoneContainer}>
                    <MaterialCommunityIcons name="flag" size={24} color="red" />
                    <TextInput style={styles.inputPhone} placeholder="+62 8726-0592-908" keyboardType="phone-pad" />
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>SIMPAN</Text>
            </TouchableOpacity>
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
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    inputContainer: {
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 14,
    },
    inputDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    inputDate: {
        flex: 1,
        fontSize: 14,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    inputPhone: {
        flex: 1,
        fontSize: 14,
        marginLeft: 8,
    },
    saveButton: {
        backgroundColor: '#32A7E2',
        height: 45,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProfileScreen;
