import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFCE5B',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 16,
          borderRadius: 1000,
          marginHorizontal: 16,
          paddingHorizontal: 16,
          height: 60,
          justifyContent: 'center', // Centra el contenido verticalmente
          alignItems: 'center', // Asegura que los iconos estén centrados
          paddingBottom: 0, // Ajusta el espaciado inferior
        }
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesome5 name={focused ? 'home' : 'home'} size={24} color={focused ? "white" : "grey"} solid={focused} />
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesome5 name={focused ? 'user' : 'user'} size={24} color={focused ? "white" : "grey"} solid={focused} />
          },
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Nfc"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesome6 name="nfc-symbol" size={24} color={focused ? "white" : "grey"} solid={focused} />
          },
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
