import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//ekranlar
import HomeScreen from "../screens/home";
import AboutScreen from "../screens/about";


//home stack
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
    return (
       <HomeStack.Navigator>
         <HomeStack.Screen name="Home" component={HomeScreen} />
       </HomeStack.Navigator>
    );
   }

   const AboutStack = createNativeStackNavigator();

   function AboutStackNavigator() {
    return (
       <AboutStack.Navigator>
         <AboutStack.Screen name="About" component={AboutScreen} />
         
       </AboutStack.Navigator>
    );
   }   


export {HomeStackNavigator, AboutStackNavigator};