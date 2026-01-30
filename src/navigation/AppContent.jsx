import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importa tus componentes de pantalla (créalos después)
import EventsScreen from "../screens/EventsScreen";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

const AppContent = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#667eea",
          tabBarInactiveTintColor: "#8e8e93",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "#e5e5ea",
            height: 60,
            paddingBottom: 5,
            paddingTop: 5,
          },
          headerStyle: {
            backgroundColor: "#667eea",
            height: 100,
            borderBottomWidth: 1,
            borderBottomColor: "#e5e5ea",
          },
          headerTitleAlign: "center",
          headerShown: false,
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
            marginBottom: 0,
          },
        }}
      >
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: "Eventos",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                size={size}
                color={color}
              />
            ),
            headerTitle: "Mis Eventos",
          }}
        />

        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            ),
            headerTitle: "Mi Perfil",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppContent;
