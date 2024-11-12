import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const TransferScreen: React.FC = () => {
  const [amount, setAmount] = useState<string>('150000');
  const router = useRouter();

  const handleKeyPress = (value: string) => {
    if (value === 'backspace') {
      setAmount(amount.slice(0, -1));
    } else if (value === '.' && !amount.includes('.')) {
      setAmount(amount + value);
    } else if (value !== 'backspace') {
      setAmount(amount + value);
    }
  };

  const handleTransfer = () => {
    Alert.alert("Transfer", "Uang berhasil dikirim!");
    // Navigasi ke halaman Ringkasan Pembayaran setelah transfer berhasil
    router.push('/PaymentSummary');
  };

  return (
    <View style={styles.container}>
      {/* Kartu Pengguna */}
      <TouchableOpacity
        style={styles.userCard}
      >
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
          style={styles.userImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Samantha</Text>
          <Text style={styles.userBank}>Bank - 0987 3422 8756</Text>
        </View>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>

      {/* Tampilan Jumlah */}
      <Text style={styles.amount}>Rp {amount}</Text>

      {/* Keypad Numerik */}
      <View style={styles.keypad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'].map((key) => (
          <TouchableOpacity
            key={key}
            style={styles.key}
            onPress={() => handleKeyPress(key)}
          >
            {key === 'backspace' ? (
              <Ionicons name="backspace" size={24} color="gray" />
            ) : (
              <Text style={styles.keyText}>{key}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Tombol Kirim */}
      <TouchableOpacity style={styles.sendButton} onPress={handleTransfer}>
        <Text style={styles.sendButtonText}>Geser Untuk Mengirim</Text>
        <Ionicons name="arrow-forward-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userBank: {
    fontSize: 14,
    color: '#7d7d7d',
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'center',
    marginBottom: 20,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  key: {
    width: '30%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  keyText: {
    fontSize: 24,
    color: '#4a4a4a',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#32A7E2',
    paddingVertical: 15,
    borderRadius: 30,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
});

export default TransferScreen;
