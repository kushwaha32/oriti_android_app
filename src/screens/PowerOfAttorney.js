// Import React Component
import React from "react";

// Import React native Components
import { View, StyleSheet, Linking } from "react-native";
import Layout from "../component/superComponent/Layout";
import globalStyle from "../style/globalStyle";
import { Button } from "react-native";

const PowerOfAttorney = () => {
  return (
    <Layout>
      <View
        style={[
          globalStyle.card,
          {
            marginBottom: 300,
            marginTop: 40,
          },
        ]}
      >
        <Button
          title="Download Poa"
          onPress={() =>
            Linking.openURL(
              "http://oritipatent.a2zfilingservices.com/PowerOritiPatents-CH.pdf"
            )
          }
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
  button: {
    width: "80%",
    padding: 10,
    backgroundColor: "blue",
    margin: 10,
  },
});

export default PowerOfAttorney;
