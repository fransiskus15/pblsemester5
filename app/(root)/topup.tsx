import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TopUpScreen = () => {
  const [amount, setAmount] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState('Instan');

  const handleAmountPress = (value: number) => {
    setAmount(value);
  };

  return (
    <View style={styles.container}>
      {/* Header */}

      {/* Top Up Method Selector */}
      <View style={styles.methodContainer}>
        <TouchableOpacity
          style={[
            styles.methodButton,
            selectedMethod === 'Instan' && styles.activeMethodButton,
          ]}
          onPress={() => setSelectedMethod('Instan')}
        >
          <Text style={selectedMethod === 'Instan' ? styles.activeMethodText : styles.methodText}>
            Instan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.methodButton,
            selectedMethod === 'Metode lain' && styles.activeMethodButton,
          ]}
          onPress={() => setSelectedMethod('Metode lain')}
        >
          <Text style={selectedMethod === 'Metode lain' ? styles.activeMethodText : styles.methodText}>
            Metode lain
          </Text>
        </TouchableOpacity>
      </View>

      {/* Top Up Amount Section */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Rp{amount}</Text>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={18} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Preset Amount Options */}
      <View style={styles.presetContainer}>
        {[10000, 20000, 50000, 70000, 100000, 150000].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.presetButton}
            onPress={() => handleAmountPress(value)}
          >
            <Text style={styles.presetText}>{`${value / 1000}k`}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Spacer to push elements down */}
      <View style={{ flex: 1 }} />

      {/* Warning Message */}
      <View style={styles.warningContainer}>
        <Ionicons name="alert-circle-outline" size={18} color="red" style={styles.warningIcon} />
        <Text style={styles.warningText}>
          Top up dana dengan <Text style={{ color: 'red' }}>Pilih metode top up</Text>
        </Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Konfirmasi & top up</Text>
        <Text style={styles.confirmAmount}>Rp{amount}</Text>
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
  methodContainer: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  methodButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeMethodButton: {
    backgroundColor: '#3b82f6',
  },
  methodText: {
    color: '#333',
  },
  activeMethodText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  amountContainer: {
    flexDirection: 'row',
    backgroundColor: '#dfe4ea',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
  },
  presetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  presetButton: {
    backgroundColor: '#f0f1f6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  presetText: {
    fontSize: 16,
    color: '#555',
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff3f3',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  warningIcon: {
    marginRight: 10,
  },
  warningText: {
    fontSize: 14,
    color: '#333',
  },
  confirmButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 10,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  confirmAmount: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
  },
  arrowIcon: {
    marginLeft: 8,
  },
});

export default TopUpScreen;
