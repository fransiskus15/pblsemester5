import { Stack } from "expo-router"



const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="notifikasi" options={{
        title: 'Notifikasi',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />
      <Stack.Screen name="history" options={{
        title: 'History Transaksi',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />
      <Stack.Screen name="topup" options={{
        title: 'Top Up',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />
      <Stack.Screen name="transfer" options={{
        title: 'Kirim Uang',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />

      <Stack.Screen name="resi" options={{
        title: 'Ringkasan Pembayaran',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />

      <Stack.Screen name="akun" options={{
        title: 'Akun',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />


      <Stack.Screen name="bantuan" options={{
        title: 'Pusat Bantuan',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#f3f3f8'
        },

      }} />

      <Stack.Screen name="kontak" options={{
        title: 'Kontak',
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'PoppinsRegular',
          fontSize: 18
        },
        headerStyle: {
          backgroundColor: '#FFFFFFFF'
        },

      }} />



    </Stack>
  )
}

export default _layout
