import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Layout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home", 
          tabBarIcon: ({ color, focused }) => 
            focused ? (
              <FontAwesome name="home" size={24} color={color} />
            ) : (
              <Ionicons name="home-outline" size={24} color="black" />
            )
        }} 
      />
      <Tabs.Screen 
        name="login" 
        options={{ title: "Login", 
        tabBarIcon: () => (
         <EvilIcons name="user" size={24} color="black" />
        )
        }} />
    </Tabs>
  );
}
