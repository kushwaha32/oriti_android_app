import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Layout from "../component/superComponent/Layout";
import globalStyle from "../style/globalStyle";

const IpServices = () => {
  return (
    <Layout>
      <View style={globalStyle.card}>
        <Text style={style.heading}>IP Services</Text>
        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>FILING AND RENEWAL OF PATENTS,
          DESIGNS AND TRADEMARKS IN{" "}
          <Text style={style.textBold}>SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>PRELIMINARY SEARCH FOR WORD
          TRADEMARKS IN <Text style={style.textBold}>SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>PRELIMINARY SEARCH FOR
          FIGURATIVE TRADEMARKS IN{" "}
          <Text style={style.textBold}>SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>FILING AND RENEWAL OF
          <Text style={style.textBold}> INTERNATIONAL TRADEMARKS</Text> ("Madrid
          System")
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text> FILING OF EUROPEAN PATENTS IN
          <Text style={style.textBold}>
            {" "}
            SWITZERLAND AND LIECHTENSTEIN
          </Text>{" "}
          (CH/LI have signed the "London Agreement")
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>MAINTENANCE AND RENEWAL OF
          INTELLECTUAL PROPERTY (I. P.) IN{" "}
          <Text style={style.textBold}> SWITZERLAND AND WORLDWIDE </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>RECORDING CHANGE OF NAMES AND/OR
          LEGAL ADDRESSES IN <Text style={style.textBold}> SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text> LEGALIZATIONS IN
          <Text style={style.textBold}> SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>OBTAINING TRUE COPIES IN
          <Text style={style.textBold}> SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>COPYRIGHT IN
          <Text style={style.textBold}> SWITZERLAND</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>ADVICE AND COLLABORATION IN
          CREATING IN-HOUSE RENEWALS SYSTEM AND DEPARTMENT FOR YOUR PREMISES
          <Text style={style.textBold}> ACROSS THE WORLD</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• PRO BONO</Text> CONSULTING (MAX 3 HOURS
          FREE) IN <Text style={style.textBold}> LUGANO AND CANTON TICINO</Text> TO UNIVERSITY STUDENTS, UNEMPLOYED
          PEOPLE AND START UPS WHO HAVE AN IDEA AND DESIRE TO SAFEGUARD IT AND
          WOULD LIKE TO RUN THEIR OWN BUSINESS
        </Text>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  
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
  textBold: {
    fontFamily: "poppins-bold",
    fontSize: 17,
    color: "#000",
  },
  aboutLinkIn: {
    marginLeft: 12,
  },
});

export default IpServices;
