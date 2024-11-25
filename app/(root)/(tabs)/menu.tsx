import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = () => {

  const navigation = useNavigation();

  const primaryMenu = [
    { id: '1', icon: 'send', label: 'Transfer Uang', color: '#32A7E2' },
    { id: '2', icon: 'wallet', label: 'Top up Wallet', color: '#B548C6' },
    { id: '3', icon: 'qr-code', label: 'Scan QR', color: '#FF8700' },
    { id: '4', icon: 'arrow-down-circle', label: 'Tarik duit', color: '#22B07D' },
  ];

  const otherMenu = [
    { id: '5', icon: 'cash', label: 'Tagihan', color: '#F67171' },
    { id: '6', icon: 'swap-vertical', label: 'History Transaksi', color: '#9471F6' },
    { id: '7', icon: 'call', label: 'Kontak', color: '#8aadf4' },
    { id: '8', icon: 'help-circle', label: 'Bantuan', color: '#F5A623' },
    { id: '9', icon: 'settings', label: 'Pengaturan', color: '#4A90E2' },
    { id: '10', icon: 'settings', label: 'Profile', color: '#E24A4AFF' },
    { id: '11', icon: 'settings', label: 'Akun', color: '#4AE257FF' },

  ];

  const handleNavigation = (label) => {
    switch (label) {
      case 'Transfer Uang':
        navigation.navigate('transfer');
        break;
      case 'Top up Wallet':
        navigation.navigate('topup');
        break;
      case 'Scan QR':
        navigation.navigate('qr');
        break;
      case 'Tarik duit':
        navigation.navigate('Withdraw');
        break;
      case 'Tagihan':
        navigation.navigate('resi');
        break;
      case 'History Transaksi':
        navigation.navigate('history');
        break;
      case 'Pengaturan':
        navigation.navigate('pengaturan');
        break;
      case 'Profile':
        navigation.navigate('profile');
        break;
      case 'Akun':
        navigation.navigate('akun');
        break;
      default:
        console.warn(`No navigation defined for ${label}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Menu</Text>

        <View style={styles.searchContainer}>
          <TextInput placeholder="Cari" style={styles.searchInput} />
          <MaterialCommunityIcons name="magnify" color="#0482F8FF" size={20} style={styles.searchIcon} />
        </View>

        {/* Primary Menu Container */}
        <View style={styles.menuContainer}>
          {primaryMenu.map((item, index) => (
            <View key={item.id} style={{ paddingHorizontal: 16 }}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleNavigation(item.label)}
              >
                <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                  <Ionicons name={item.icon} color="#fff" size={21} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
              {index < primaryMenu.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>

        {/* Other Menu Section */}
        <Text style={styles.otherMenuTitle}>Other Menu</Text>
        <View style={styles.menuContainer}>
          {otherMenu.map((item, index) => (
            <View key={item.id} style={{ paddingHorizontal: 16 }}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleNavigation(item.label)}
              >
                <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                  <Ionicons name={item.icon} color="#fff" size={21} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
              {index < otherMenu.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 21,
    backgroundColor: '#F7F7FB',
  },
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 19,
    fontFamily: 'PoppinsMedium',
    textAlign: 'center',
    marginBottom: 21,
    marginTop: 31,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAF2',
    borderRadius: 13,
    padding: 11,
    marginBottom: 21,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: '#A1A0A0',
    marginLeft: 11
  },
  searchIcon: {
    marginRight: 11,
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingVertical: 11,
    marginBottom: 20,
  },
  otherMenuTitle: {
    fontSize: 15,
    fontFamily: 'PoppinsRegular',
    color: '#A1A0A0',
    paddingLeft: 21,
    paddingBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 11,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuLabel: {
    fontSize: 15,
    fontFamily: 'PoppinsRegular',
    color: '#273240',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
});

export default MenuScreen;

