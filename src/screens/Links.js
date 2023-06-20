import { StyleSheet, Text, View, Image, Linking } from "react-native";
import React from "react";
import Layout from "../component/superComponent/Layout";

const Links = () => {
  return (
    <Layout>
      <View style={style.card}>
        <Text style={style.heading}>Links</Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.ipduedates.com/")}
          >
            IPduedates
          </Text>{" "}
          - Free tool to insert and monitor IP Due Dates and to send automatic
          e-reminders by e-mail to whom and when you desire (www.ipduedates.com)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.epvalidation.ch/")}
          >
            EPValidation
          </Text>{" "}
          - For the Validation of European Patents in CH/LI
          (www.epvalidation.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.tmrenewal.ch/")}
          >
            TM Renewal
          </Text>{" "}
          - For the renewal of Trademarks in Switzerland (www.tmrenewal.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.ige.ch/en.html")}
          >
            SFIIP
          </Text>{" "}
          - Swiss Federal Institute of Intellectual Property, Bern (www.ige.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.swissreg.ch")}
          >
            SWISS REG
          </Text>{" "}
          - Free Swiss Information IP database (www.swissreg.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.patentannuities.ch")}
          >
            Patent Annuities
          </Text>{" "}
          - For the payment of Patent Annuities in CH/LI
          (www.patentannuities.ch)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.iprecordals.ch")}
          >
            IP Recordals
          </Text>{" "}
          - For the Recordals of IP in Switzerland (www.iprecordals.ch)
        </Text>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  card: {
    marginTop: 20,
    width: "95%",
    backgroundColor: "#fff",
    elevation: 1,
    shadowColor: "#52006A",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    color: "#525252",
    fontWeight: "400",
    marginBottom: 40,
  },
  text: {
    fontSize: 17,
    fontFamily: "poppins-regular-400",
    color: "#555",
    textAlign: "justify",
    lineHeight: 30,
    marginBottom: 15,
  },
  textSm: {
    fontSize: 13,
    fontFamily: "poppins-regular-400",
    color: "#555",
    textAlign: "justify",
    lineHeight: 30,
    marginBottom: 15,
  },
  textBold: {
    fontFamily: "poppins-bold",
    fontSize: 17,
    color: "#000",
  },
  aboutLinkIn: {
    marginLeft: 12,
  },
});

export default Links;
