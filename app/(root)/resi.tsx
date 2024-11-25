import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, PanResponder } from 'react-native';
import { Image } from 'react-native';

const PaymentSummaryScreen = () => {
    const [slideCompleted, setSlideCompleted] = useState(false); // State untuk tombol geser
    const pan = new Animated.Value(0); // Posisi geser awal

    // Logika untuk tombol geser
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan }], { useNativeDriver: false }),
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 150) {
                setSlideCompleted(true);
            } else {
                Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start(); // Reset posisi
            }
        },
    });

    return (
        <View style={styles.container}>
            {/* Card */}
            <View style={styles.card}>
                {/* Star Icon */}
                <View style={styles.starIcon}>
                    <Text style={styles.starText}>★</Text>
                </View>

                {/* Store Details */}
                <View style={styles.storeDetails}>
                    <View style={styles.storeIcon}>
                        <Text style={styles.storeIconText}>🛒</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.storeName}>Minimarket Anugrah</Text>
                        <Text style={styles.storeDate}>Nov 17, 2024</Text>
                    </View>
                </View>

                {/* Transaction Code */}
                <View style={styles.transactionCode}>
                    <Text style={styles.label}>Kode Transaksi</Text>
                    <TouchableOpacity style={styles.copyButton}>
                        <Image source={require('@/assets/images/copy.png')} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>

                {/* Divider */}
                <View style={styles.divider} />

                {/* Transaction Details */}
                <View style={styles.transactionDetails}>
                    <Text style={styles.label}>No. Referensi</Text>
                    <Text style={styles.value}>REF8473VJQ20</Text>

                    <Text style={styles.label}>Tipe Transaksi</Text>
                    <Text style={styles.value}>Pembayaran</Text>

                    <Text style={styles.label}>Nominal</Text>
                    <Text style={styles.value}>Rp 50.000</Text>

                    <Text style={styles.label}>Biaya admin</Text>
                    <Text style={styles.value}>Rp 1.000</Text>
                </View>

                {/* Promo Code */}
                <View style={styles.promoCode}>
                    <TextInput placeholder="Promo Code" style={styles.promoInput} />
                    <TouchableOpacity style={styles.applyButton}>
                        <Text style={styles.applyText}>APPLY</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Total */}
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalAmount}>Rp 51.000</Text>
            </View>

            {/* Geser Untuk Bayar */}
            {!slideCompleted ? (
                <View style={styles.swipeButtonContainer}>
                    <Animated.View
                        style={[
                            styles.swipeCircle,
                            { transform: [{ translateX: pan }] },
                        ]}
                        {...panResponder.panHandlers}
                    >
                        <Text style={styles.iconText}>→</Text>
                    </Animated.View>
                    <Text style={styles.swipeText}>Geser Untuk Bayar</Text>
                </View>
            ) : (
                <TouchableOpacity style={styles.payButton}>
                    <Text style={styles.payButtonText}>Pembayaran Berhasil</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 5,
        marginTop: 10,
    },
    starIcon: {
        backgroundColor: '#22B07D',
        width: 50,
        height: 50,
        borderRadius: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: -45,
    },
    starText: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    storeDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    storeIcon: {
        backgroundColor: '#FFF5E9',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    storeIconText: {
        fontSize: 20,
    },
    storeName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    storeDate: {
        fontSize: 12,
        color: '#9A9A9A',
        textAlign: 'right',
    },
    transactionCode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#F1F1F9',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        color: '#777777FF',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#EDEDED',
        marginVertical: 10,
    },
    transactionDetails: {
        marginBottom: 10,
    },
    value: {
        fontSize: 14,
        color: '#ACACACFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    promoCode: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    promoInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#F7F9FC',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    applyButton: {
        backgroundColor: '#32A7E2',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    applyText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    totalContainer: {
        backgroundColor: '#F1F1F9',
        borderRadius: 10,
        padding: 10,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 25,
        color: '#4A4A4A',
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 25,
        color: '#4A4A4A',
        fontWeight: 'bold',
    },
    swipeButtonContainer: {
        marginTop: 20,
        backgroundColor: '#32A7E2',
        borderRadius: 45,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    swipeCircle: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        marginLeft: 10,
    },
    swipeText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconText: {
        color: '#32A7E2',
        fontSize: 30,
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,

    },
    payButton: {
        backgroundColor: '#32A7E2',
        borderRadius: 45,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    payButtonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    copyButton: {
        backgroundColor: '#F7F9FC',
        borderRadius: 10,
        padding: 5,
    },
    copyText: {
        fontSize: 16,
    },

});

export default PaymentSummaryScreen;
