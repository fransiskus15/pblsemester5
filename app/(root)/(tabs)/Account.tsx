import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import TabSection from '@/components/in_out';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import images from '@/constants/images';
import { styles } from './pengaturan';

export const Account = () => {

    const router = useRouter();

    const handleProfile = () => {
        useNavigation.navigate('Profile'); // Mengganti router.push dengan navigation.navigate
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 20, paddingBottom: 20 }}>
            <View style={styles.container}>


                <View style={{ backgroundColor: '#32A7E2' }}>
                    <Text style={styles.headerTitle}>Akun</Text>
                </View>

                <View style={styles.headerBackground}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={images.avatar} // Replace with actual avatar image URL
                            style={styles.avatar} />
                    </View>
                </View>

                <View className='pt-14'>
                    <Text className='text-[20px] justify-center text-center font-pregular'>Miaw</Text>
                </View>

                <TabSection />

                <View style={styles.maincontent} className="w-[327px] h-[151px] mt-7 bg-white p-4">
                    <TouchableOpacity className="flex-row items-center justify-between mb-4" onPress={handleProfile}>
                        <View className="flex-row items-center">
                            <View className="bg-[#e8f4fa] rounded-[25px] h-[34px] w-[34px] items-center justify-center mr-2">
                                <MaterialCommunityIcons name='account' size={24} color="#32A7E2" />
                            </View>
                            <Text className="text-sm font-pregular">Profil</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={24} color="#32A7E2" />
                    </TouchableOpacity>

                    <View className="w-full h-[1px] bg-[#E0E0E0]" />

                    <TouchableOpacity className="flex-row items-center justify-between mt-4" onPress={() => { }}>
                        <View className="flex-row items-center">
                            <View className="bg-[#e8f4fa] rounded-[25px] h-[34px] w-[34px] items-center justify-center mr-2">
                                <MaterialCommunityIcons name='shield-account-variant' size={24} color="#32A7E2" />
                            </View>
                            <Text className="text-sm font-pregular">Akun</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={24} color="#32A7E2" />
                    </TouchableOpacity>
                </View>

                <View style={styles.maincontent} className="w-[327px] h-[221px] mt-7 bg-white p-4">
                    <TouchableOpacity className="flex-row items-center justify-between mb-4" onPress={() => { }}>
                        <View className="flex-row items-center">
                            <View className="bg-[#e8f4fa] rounded-[25px] h-[34px] w-[34px] items-center justify-center mr-2">
                                <MaterialCommunityIcons name='frequently-asked-questions' size={24} color="#32A7E2" />
                            </View>
                            <Text className="text-sm font-pregular">Pusat Bantuan</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={24} color="#32A7E2" />
                    </TouchableOpacity>

                    <View className="w-full h-[1px] bg-[#E0E0E0]" />

                    <TouchableOpacity className="flex-row items-center justify-between mt-4 mb-4" onPress={() => { }}>
                        <View className="flex-row items-center">
                            <View className="bg-[#e8f4fa] rounded-[25px] h-[34px] w-[34px] items-center justify-center mr-2">
                                <MaterialCommunityIcons name='file-document' size={24} color="#32A7E2" />
                            </View>
                            <Text className="text-sm font-pregular">Syarat & Ketentuan</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={24} color="#32A7E2" />
                    </TouchableOpacity>

                    <View className="w-full h-[1px] bg-[#E0E0E0]" />

                    <TouchableOpacity className="flex-row items-center justify-between mt-4" onPress={() => { }}>
                        <View className="flex-row items-center">
                            <View className="bg-[#e8f4fa] rounded-[25px] h-[34px] w-[34px] items-center justify-center mr-2">
                                <MaterialCommunityIcons name='logout' size={24} color="#E74C3C" />
                            </View>
                            <Text className="text-sm font-pregular">Log Out</Text>
                        </View>
                        <MaterialCommunityIcons name='chevron-right' size={24} color="#E74C3C" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
