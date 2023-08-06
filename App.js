import * as React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import IpRenewalRequest from "./src/screens/IpRenewalRequest";
import IpServices from "./src/screens/IpServices";
import PowerOfAttorney from "./src/screens/PowerOfAttorney";
import AgencyFees from "./src/screens/AgencyFees";
import Contact from "./src/screens/Contact";
import Links from "./src/screens/Links";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home screen */}
        <Stack.Screen name="Home" component={Home} />

        {/* About screen */}
        <Stack.Screen name="About Us" component={About} />

        {/* Ip Renewal Request */}
        <Stack.Screen name="IP Renewal" component={IpRenewalRequest} />

        {/* Ip Services */}
        <Stack.Screen name="IP Services" component={IpServices} />

        {/* Power of Attorney */}
        <Stack.Screen name="Power of Attorney" component={PowerOfAttorney} />

        {/* Agency Fees */}
        <Stack.Screen name="Agency Fees" component={AgencyFees} />

        {/* Links */}
        <Stack.Screen name="Links" component={Links} />

        {/* Contact */}
        <Stack.Screen name="Contact Us" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
