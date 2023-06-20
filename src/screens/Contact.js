import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Layout from "../component/superComponent/Layout";
import { Linking } from "react-native";

const Contact = () => {
    return(
        <Layout>
      <View style={style.card}>
        <Text style={style.heading}>Contact Us</Text>
        <Text style={style.text}>
          <Text style={style.textBold}>• ORITI PATENTS-FRANCO ORITI</Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text> Viale Carlo Cattaneo, 23
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text> 6900 Lugano - Switzerland
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Tel.: <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("tel:+41919213976")}
          >
           +41 (0)91 921 39 76
          </Text>
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Mobile.: <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("tel:+41795942084")}
          >
          +41 79 594 20 84
          </Text>{" "}
          (Whatsapp and Telegram)
        </Text>

        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Email.: <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("mailto:info@oritipatents.ch")}
          >
          info@oritipatents.ch
          </Text>
        </Text>
        
        <Text style={style.text}>
          <Text style={style.textBold}>• </Text>Website.: <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://www.oritipatents.ch/index.php/it/")}
          >
         www.oritipatents.ch
          </Text>
        </Text>

      </View>
    </Layout>
    )
}

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
  
export default Contact