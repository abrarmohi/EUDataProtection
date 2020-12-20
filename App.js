import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/HomeScreen";
import InputScreen from "./app/screens/InputScreen";
import ResultScreen from "./app/screens/ResultScreen";
import AboutUs from "./app/screens/AboutUs";
import EuLaw from "./app/screens/EuLaw";
import FirstAid from "./app/screens/FirstAid";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EU DATA PROTECTION APP" component={HomeScreen} />
        <Stack.Screen name="EU data law" component={EuLaw} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="First aid" component={FirstAid} />
        <Stack.Screen name="About us" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
