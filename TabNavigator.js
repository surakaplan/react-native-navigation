import React from "react";
import { AboutStackNavigator, HomeStackNavigator } from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = "home";
          } else if (route.name === "UsersTab") {
            iconName = "people";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator} 
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="UsersTab"
        component={AboutStackNavigator}
        options={{ tabBarBadge: 3, title: "About" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
