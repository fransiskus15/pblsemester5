import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentSummaryScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}

            {/* Store Information Card */}
            <View style={styles.card}>
                <View style={styles.storeInfo}>
                    <Ionicons name="cart-outline" size={24} color="#ff7043" />
                    <Text style={styles.storeName}>Minimarket Anugrah</Text>
                    <Text style={styles.dateText}>Nov 17, 2024</Text>
                    <View style={styles.starIconContainer}>
                        <Ionicons name="star" size={24} color="#fff" />
                    </View>
                </View>

                {/* Transaction Code */}
                <View style={styles.transactionCodeContainer}>
                    <TextInput
                        style={styles.transactionCode}
                        placeholder="Kode Transaksi"
                        editable={false}
                    />
                    <Ionicons name="copy-outline" size={20} color="#aaa" />
                </View>

                {/* Transaction Details */}
                <View style={styles.transactionDetails}>
                    <Text style={styles.detailLabel}>No. Referensi</Text>
                    <Text style={styles.detailValue}>REF8473VJQ20</Text>
                    <Text style={styles.detailLabel}>Tipe Transaksi</Text>
                    <Text style={styles.detailValue}>Pembayaran</Text>

                    {/* Amount Details */}
                    <View style={styles.amountDetails}>
                        <View style={styles.amountRow}>
                            <Text style={styles.amountLabel}>Nominal</Text>
                            <Text style={styles.amountValue}>Rp 50.000</Text>
                        </View>
                        <View style={styles.amountRow}>
                            <Text style={styles.amountLabel}>Biaya admin</Text>
                            <Text style={styles.amountValue}>Rp 1.000</Text>
                        </View>
                    </View>

                    {/* Promo Code */}
                    <View style={styles.promoCodeContainer}>
                        <Ionicons name="pricetags-outline" size={20} color="#aaa" />
                        <Text style={styles.promoCodeText}>Promo Code</Text>
                        <TouchableOpacity>
                            <Text style={styles.applyButton}>APPLY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Total Amount */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>Rp 51.000</Text>
            </View>

            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Geser Untuk Bayar</Text>
                <Ionicons name="arrow-forward-outline" size={18} color="#fff" style={styles.arrowIcon} />
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
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
    },
    storeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    storeName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 10,
    },
    dateText: {
        fontSize: 12,
        color: '#666',
        marginLeft: 'auto',
    },
    starIconContainer: {
        backgroundColor: '#4CAF50',
        borderRadius: 16,
        padding: 4,
        position: 'absolute',
        top: -10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 12,
        marginBottom: 16,
    },
    transactionCode: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    transactionDetails: {
        marginBottom: 16,
    },
    detailLabel: {
        fontSize: 12,
        color: '#666',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    amountDetails: {
        marginTop: 8,
    },
    amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amountLabel: {
        fontSize: 14,
        color: '#666',
    },
    amountValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    promoCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 10,
        marginTop: 8,
    },
    promoCodeText: {
        flex: 1,
        fontSize: 14,
        color: '#aaa',
    },
    applyButton: {
        color: '#3b82f6',
        fontWeight: 'bold',
    },
    totalContainer: {
        backgroundColor: '#e6e6fa',
        padding: 16,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalLabel: {
        fontSize: 16,
        color: '#666',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    payButton: {
        backgroundColor: '#3b82f6',
        borderRadius: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    payButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    arrowIcon: {
        marginLeft: 8,
    },
});

export default PaymentSummaryScreen;
