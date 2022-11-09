import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import Customer from "./components/Customer";
import CustomerSignup from "./components/CustomerSignup";
import RestaurantSignup from "./components/RestaurantSignup";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="Customer" component={Customer} />
        <Stack.Screen name="CustomerSignup" component={CustomerSignup} />
        <Stack.Screen name="RestaurantSignup" component={RestaurantSignup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
