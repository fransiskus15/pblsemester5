import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentSummary = () => {
    return (
        <View style={styles.container}>
            {/* Header */}


            {/* Payment Summary Card */}
            <View style={styles.card}>
                {/* Profile Section */}
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                            style={styles.avatar}
                        />
                        <View style={styles.starIconContainer}>
                            <Text style={styles.starIcon}>⭐</Text>
                        </View>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>Samantha</Text>
                        <Text style={styles.userPhone}>0987 3422 8756</Text>
                    </View>
                    <Text style={styles.transactionDate}>Nov 17, 2024</Text>
                </View>

                {/* Transaction Code Section */}
                <View style={styles.transactionCodeSection}>
                    <Text style={styles.transactionCodeLabel}>Kode Transaksi</Text>
                    <View style={styles.transactionCodeContainer}>
                        <Text style={styles.transactionCode}>X7PQ3ZL5N8T</Text>
                        <Text style={styles.copyIcon}>📋</Text>
                    </View>
                </View>

                {/* Transaction Details Section */}
                <View style={styles.detailsSection}>
                    <Text style={styles.detailLabel}>No. Referensi</Text>
                    <Text style={styles.detailValue}>REFB473VJQ20</Text>

                    <Text style={styles.detailLabel}>Tipe Transaksi</Text>
                    <Text style={styles.detailValue}>Transfer</Text>

                    <Text style={styles.detailLabel}>Nominal</Text>
                    <Text style={styles.amountValue}>Rp 150.000</Text>

                    <Text style={styles.detailLabel}>Biaya admin</Text>
                    <Text style={styles.adminFee}>Rp 1.000</Text>
                </View>

                {/* Total Amount */}
                <View style={styles.totalSection}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalAmount}>Rp 151.000</Text>
                </View>
            </View>

            {/* Share Button */}
            <TouchableOpacity style={styles.shareButton}>
                <Text style={styles.shareIcon}>🔗</Text>
                <Text style={styles.shareButtonText}>Bagikan</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#333',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarContainer: {
        position: 'relative',
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    starIconContainer: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        padding: 2,
    },
    starIcon: {
        color: '#fff',
        fontSize: 14,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    userPhone: {
        fontSize: 12,
        color: '#777',
    },
    transactionDate: {
        fontSize: 12,
        color: '#999',
    },
    transactionCodeSection: {
        backgroundColor: '#f0f3f5',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    transactionCodeLabel: {
        fontSize: 12,
        color: '#555',
    },
    transactionCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    transactionCode: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 8,
    },
    copyIcon: {
        fontSize: 18,
        color: '#333',
    },
    detailsSection: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 10,
    },
    detailLabel: {
        fontSize: 12,
        color: '#555',
        marginTop: 10,
    },
    detailValue: {
        fontSize: 14,
        color: '#333',
    },
    amountValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 4,
    },
    adminFee: {
        fontSize: 14,
        color: '#333',
        marginTop: 4,
    },
    totalSection: {
        backgroundColor: '#f0f3f5',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6C63FF',
    },
    shareButton: {
        backgroundColor: '#3b82f6',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    shareButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 8,
    },
    shareIcon: {
        fontSize: 16,
        color: '#fff',
    },
});

export default PaymentSummary;
