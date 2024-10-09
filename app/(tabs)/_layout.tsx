import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

import { Colors } from "@/constants/Colors";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
