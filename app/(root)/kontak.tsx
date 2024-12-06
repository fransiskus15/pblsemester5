import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const contacts = {
    recent: [
        { id: '1', name: 'Samantha', phone: '0987 3422 8756', avatar: require('@/assets/images/samantha.png') },
        { id: '2', name: 'Rose Hope', phone: '0987 3422 8756', avatar: require('@/assets/images/rose.png') },
        { id: '3', name: 'Angela Smith', phone: '0987 3422 8756', avatar: require('@/assets/images/angela.png') },
    ],
    all: [
        { id: '4', name: 'Andrea Summer', phone: '0987 3422 8756', avatar: require('@/assets/images/andrea.png') },
        { id: '5', name: 'Karen William', phone: '0987 3422 8756', avatar: require('@/assets/images/karen.png') },
        { id: '6', name: 'Thomas Wise', phone: '0987 3422 8756', avatar: require('@/assets/images/thomas.png') },
    ],
};


const ContactScreen = () => {
    const renderContact = ({ item }) => (
        <View style={styles.contactItem}>
            <Image source={item.avatar} style={styles.avatarImage} />
            <View>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactPhone}>Bank - {item.phone}</Text>
            </View>
        </View>
    );

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

            {/* Recent Contacts */}
            <Text style={styles.sectionTitle}>Terbaru</Text>
            <FlatList
                data={contacts.recent}
                keyExtractor={(item) => item.id}
                renderItem={renderContact}
                style={styles.list}
            />

            {/* All Contacts */}
            <Text style={styles.sectionTitle}>Kontak</Text>
            <FlatList
                data={contacts.all}
                keyExtractor={(item) => item.id}
                renderItem={renderContact}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
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
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#4A4A4A',
    },
    searchIconContainer: {
        marginLeft: 5,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A4A4A',
        marginVertical: 10,
    },
    list: {
        marginBottom: 20,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    contactName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A4A4A',
    },
    contactPhone: {
        fontSize: 12,
        color: '#9A9A9A',
    },
});

export default ContactScreen;
